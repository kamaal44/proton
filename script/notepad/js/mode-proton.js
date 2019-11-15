define('ace/mode/protoncode', function(require, exports, module) {

    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var ExampleHighlightRules = require("ace/mode/protoncode_highlight_rules").ExampleHighlightRules;
    
    var Mode = function() {
        this.HighlightRules = ExampleHighlightRules;
    };
    oop.inherits(Mode, TextMode);


    (function() {
        // Extra logic goes here. (see below)
    }).call(Mode.prototype);
    
    exports.Mode = Mode;
    });
    
    define('ace/mode/protoncode_highlight_rules', function(require, exports, module) {
    
    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;
    
    var ExampleHighlightRules = function() {
    
        this.$rules = {
         start: [{
            token: 'entity.name.function',
            regex: '(VERBOSE|SPOOL|API|SOUNDS)'
         },
         {
            token: 'string',
            regex: '(PYEXEC|EDIT|SHELL|LOGO|LOAD|INFO|HELP|#include)'
         },
         {
             token: 'comment',
             regex: '(#).*$'
         },
         {
             token: 'constant.language',
             regex: '(JOBS|STAGERS|ZOMBIES|CREDS|DOMAIN|REPEAT)$'
         },
         {
            token: 'support.type',
            regex: '(USE|SET|DELAY|PRINT|RUN)'
         },
         {
            token: 'keyword',
            regex: '(UNSET|KILL|EXIT|BACK|CLEAR)'
         },
         {
            token: 'support.type',
            regex: "[0-9_][a-zA-Z0-9_]*\\b"
         },
           ] 
        }
        
    }
    
    oop.inherits(ExampleHighlightRules, TextHighlightRules);
    
    exports.ExampleHighlightRules = ExampleHighlightRules;
    });
    
    