import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealMath from 'reveal.js/plugin/math/math.esm.js';

import RevealRewrite from './plugin/rewrite/plugin.js';
import RevealReferences from './plugin/references/plugin.js';

import Templates from '../templates/templates.js';

//let RevealSpotlight = require('./plugin/spotlight/spotlight.js');

/*<script src="plugin/rewrite/rewrite.js"></script>
<script src="plugin/references/references.js"></script>*/


class GitShow {
    
    presentationConfig = {};
    template = null;

    revealConfig = {
        width: 1920,
        height: 1080,
        margin: 0,

        hash: true,
        center: false,
        pdfMaxPagesPerSlide: 1,
        pdfSeparateFragments: false,

        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath, RevealRewrite, RevealReferences ],
    };

    init(config) { 
        this.presentationConfig = config;
        console.log('Welcome to GitShow!');
        console.log('https://github.com/radkovo/gitshow');
        console.log(this.presentationConfig);
        this.main = document.getElementById('gitshow-main');
        if (config.contents) {
            if (config.contents.length > 0) {
                this.createContent(config.contents);
            }
            if (config.template && config.template.name) {
                this.initTemplate(config.template.name);
            }
            this.runReveal();
        } else {
            this.showError('Presentation config not found.');
        }
    }
    
    getPresentationConfig() {
        return this.presentationConfig;
    }

    getRevealConfig() {
        return this.revealConfig;
    }

    addStyle(path) {
        const head = document.head || document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', path);
        head.appendChild(link);
    }

    initTemplate(name) {
        const templates = new Templates();
        const Template = templates.index[name];
        if (Template) {
            this.template = new Template();
            this.template.init(this);
        } else {
            console.warn('Unknown template "' + name + '"');
        }
    }

    runReveal() {
        let deck = new Reveal(this.revealConfig);
        deck.initialize();
    }

    createContent(contents) {
        let sections = '';
        for (let cont of contents) {
            sections += `<section data-markdown="${cont}" class="normal"></section>`;
        }
        this.main.innerHTML = '<div class="reveal"><div class="slides">'
            + sections
            + '</div></div>';
    }

    showError(msg) {
        this.main.innerHTML = '<strong>Error:</strong> ' + msg;
    }

}

export default GitShow;
