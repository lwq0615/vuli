(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{431:function(t,l,o){},490:function(t,l,o){"use strict";o(431)},539:function(t,l,o){"use strict";o.r(l);var n={name:"vu-scroll",props:{noScroll:Boolean},data:function(){return{o:null}},methods:{scroll:function(t){var l=this;null!==this.o&&clearTimeout(this.o),this.o=setTimeout((function(){var o=t.target.scrollTop+t.target.clientHeight;Math.abs(o-t.target.scrollHeight)<1?l.$emit("scrollEnd"):0===t.target.scrollTop&&l.$emit("scrollStart"),l.o=null}),200)}}},s=(o(490),o(49)),e=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("section",{class:"vu-scroll_container "+(this.noScroll?"noScroll":""),on:{scroll:this.scroll}},[this._t("default")],2)}),[],!1,null,"50bfde74",null);l.default=e.exports}}]);