!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WrapText_unicode=t():e.WrapText_unicode=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t={}){const{charLoaderFn:n,collapsesSpaces:o,collapsesNewlines:r,initialChunkSize:l,supplementalChunkSize:i}=t,a=[],s=e[Symbol.iterator]();let f=s.next(),c=l,h=0,u=!1;const g=()=>{if(u)return;const e=a.length+c;if(r)for(;!f.done&&a.length<e;)n(a,f.value,o),f=s.next();else for(;!f.done&&a.length<e;){if("\r"===f.value||"\n"===f.value){u=!0;break}n(a,f.value,o),f=s.next()}c=Math.max(l-h,i)};this.enterNextSection=()=>!!u&&("\r"===f.value&&(f=s.next()),"\n"===f.value&&(f=s.next()),h+=a.length,a.length=0,u=!1,!0),this.has=e=>{if(e<0)return!1;for(;;){if(e<a.length-1)return!0;if(f.done||u)return e<a.length;g()}},this.get=e=>{if(e<0)return"";for(;;){if(e<a.length-1)return a[e];if(f.done||u)return e<a.length?a[e]:"";g()}},this.slice=(e,t)=>{if(t<=0||t<=e)return[];for(;;){if(t<=a.length-1)return a.slice(e,t);if(f.done||u)return a.slice(e,t);g()}console.log(e,t)}}e.r(t),e.d(t,{measureText:()=>d,wrapText:()=>L});const o=document.createElement("canvas").getContext("2d"),r=Number.POSITIVE_INFINITY,l={AI:[[55462,97,19,17,99,8,37,2,55,26,36,10,1,9,1,676,83,26,12,4,67,6,4,26,9,2,9,5,4,2,4,11,44,2,73,43,3,48,24,14,134,11,57,37,1,7480,13,3,6,464,32,29,1,1,14,2,1,167],[60,7,57,3,29,4,12,114353,7,1775,4,962,29,122,1,11,5,2,1,10,1,2,1,3,2,9,3,42,1,49,1,2,1,4,2,2,1,73,1,7,1,8,1,32,3,17,3,6,2,9,1,9,1,9,6,2,1,11,3,3,15,12,36,5,75,2,20,1,77,1,59,473,1,3,1,19,1,3,1,3,3,3,1,35,1,5,3,8,5,7,3,21,1,4,1,105,4,1,4,23,9,5,11,11,1,50,1,157,3,96,1,7493,3,13,2,523,2,5,1,3,1,178]],AL:[[11,2,2,228,1342,26,5,2,2,2,2,3,9,2,2,5,7,2,18,3,246,995,2044,1,580,1151,712,26,32,26,32,26,32,26,32,26,379,139,25,605,5545,19788,1035,19349,536,82,262,419,77,10,6,6,58,29,2,160,2,54,10,196,386,1,116,1,380,1,105,14,255,19,181,75,3,94,2,13,6,81,2,45,3,119,16,72,334,1119,73,39,88,193,256,3,52,665,549,9,417,440,537,678,20416,14,105,150,141,112,100,194,63,3,36,68,7,24,126,115,1,11,5,98,30650,5,2,12,13,3,20,1,4,167,66,6,42,1436,127,20,96,3,5,4,33,40,21,98,163,387,335,7,2,16,4,15,46,37,8,3,3,65,16,1,3,1,17,11,4,1,1,1,1,1,1,1,11,1,2,1,12,1,1,2,2,130,15,1,20,5,2,1,1,1,20,6,33,25,64,1,96,2,2,481,126,39,375,540,150,103,57,3,46,186,177,1,781,160,104,348,1,46,6,243,156,2,35,14,5,177,91,55,110,1,17,128,61,1,34,32,67,42,52,25,18,1,51,68,9,32,19,71,24,97,1,2,44,17,11,50,15,1,32,19,91,25,65,42,54,4,10,32,3,1,69,161,1,16,22,11,1,8,104,45,125,3,103,215,140,106,5,1,7,5,5,1,134,1,1,14,2,11,11,50,217,262,6,1,2,3,3,40,30,1,1,30,22,4,3,35],[54,2,146,173,83,245,11,83,29,9,39,7,9,9,55,5,11,44,84,13,115,129,3,7,37,87,5,25,7,139,23,14,13,17,6,78,1,251,1,24,1,560,2,59,1,573,1,53,16,2,4,2,2,6,16,2,9,4,3,2,3,2,6,2,3,5,1,15,1,2,2,22,3,2,9,7,1,2,26,2,3,195,14,2,44,77,3,2,2,2,58,814,67,49,8,3,196,2,14,2,1,2,3,2,6,1269,43,19,29,339,6,11,44,482,19,2,9,1146,1,2,13,2,7,51,3,56,511,53,7,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,24,3,339,2,6,6,4,2,3,2,27,2,6,2,7,3,3,2,64,2,6,4,11,2,3,3,1,6,1,2,70,2,84,136,24,10,86,13,19,159,65,22,60,5,29,8,1,23,2,6,59,3,38,11,245,61,115,4791,9,8,8,4,12,6,106,3074,1,2,6,2,3,8987,469,7009,12,73,74,102,1,3,22,1,63,689,18,6,20,2,6,24,3,1,3,1,1,11,47,19,29,18,78,18,30,8,568,8634,118,3,461,4050,178,4,238,5,2,2,35,7,599,14,1,1,96,2637,195,18,110,103,921,15,16,5,7,1,20,200,1,5,18,343,31,2,1,2,5,48,37,2,1,2,6,113,29,6,18,44,36,2,8,264,56,1,15,39,45,42,39,59,38,3,7,113,23,2,1,2,7,6,6,14,8,11,63,117,43,342,42,81,47,37,3,16,2,24,46,187,1,21,47,31,2,21,3,19,52,159,4,36,4,2,1,2,6,2,21,3,1,3,7,39,46,8,9,2,14,2,3,4,6,85,24,2,17,12,19,29,3,15,47,17,34,42,35,27,24,20,1,12,44,17,1,12,19,5,4,18,52,13,22,21,6,1,20,39,3,5,17,23,4,1,3,12,21,10,9,1,28,79,1,7,41,2,30,317,35,1,5,8,50,14,50,56,72,81,6,13,3,8,17,1,7,6,18,1,7,3,21,11,53,17,4,7,27,2,7,33,2,1,28,2,1,1,28,24,8,11,28,2,2,2,3,17,45,3,15,1,1,1,1,5,23,1,31,71,25,5,5,1,21,1,4,6,1,2,18,49,8,9,30,1,6,1,1,1,22,1,7,3,21,8,1,2,43,5,5,70,8,2,41,2,5,25,7,11,21,10,310,68,1,2,6,2,14,2,10,2,1,2,6,2,14,2,10,13,51,9,39,5,35,5,35,19,29,1,47,1,79,43,4,2,7,5,35,3,29,11,37,7,7,2,16,1,2,10,3,1,31,5,26,17,48,4,28,132,44,52,12,2,2,1,1,1,16,1,3,1,52,1,8,4,44,13,122,35,13,3,14,2,1,2,18,2,25,2,11,18,1,1,3,237,134,2,4,113,2,2,11,41,53,3,63,1,15,3,362,17,16,1,97,57,4,13,6,20254,34,1,79,5,1,2,8,1,3,2,42,2,6,2,6,10,5,3,5,3,5,13,1,9,10,149,7,2,2,24,40,33,1,17,3,4,5,15,46,62,22,11,27,12,1,3,2,1,5,63,49,15,51,9,1,1,5,5,3,6,22,2,3,2,2,2,1,1,4,2,1,2,1,1,2,25,4,4,1,6,58,2,3,1,1,2,22,2,77,1,1,1,8,1,22,17,9,1,69,3,1,1,27,19,45,21,1,11,15,5,267,3,5,1,39,22225,63,8047,1,23,4,22,1,64,6,2,6,2,6,2,6,2,6,2,6,2,6,2,6,10,22,25,55,11,37,13,1,4,3,1,5,1,100,1,1,1,1,1,27,1,95,1,104,2,31,3,25,6,7,1,5,1,1,1,20,1,47,1,255,1,1,3,31,5,62,23,2,1,127,1,255,1,15,11,30,3,4,1,43,45,2,11,2,2,72,7,2,30,3,40,28,3,29,2,14,17,28,4,3,4,24,13,3,3,3,2,1,8,7,1,7,2,8,5,15,5,1,2,1,4,3,3,1,3,3,3,1,3,7,11,9,5,1,17,10,38,3,258,10,26,38,1,11,5,13,1,5,1,39,1,24,1,29,2,80,3,6,1,1,1,3,3,6,2,5,5,7,1,15,2,46,2,24,2,10,2,2,2,12,3,1,3,17,3,1,3,1,5,1,3,12,2,4,2,2,2,9,3,3,5,4,13,1,5,1,2,3,8,2,2,1,3,2,5,11,1,30,4,1,1,1,1,30,2,6,2,1,2,1,2,3,1,1,15,1,2,3,1,1,1,8,11,3,15,1,2,4,3,3,3,1,3,4,1,4,1,3,1,1,2,3,1,5,2,1,12,2,1,4,7,8,9,1,100,12,4,2,1,4,9,2,1,4,17,3,16,7,7,2,1,1,28,1,38,6,2,2,3,2,1,12,1,2,2,5,3,3,1,2,1,6,2,2,1,2,3,6,2,52,3,30,8,7,3,5,3,37,3,5,3,21,1,255,65,36,1,26,1,6,2,12,1,62,1,43,10,1,2,5,2,3,34,7,1,2,3,42,8,8,3,5,1,29,11,2,42,35,1,3,23,37,1,5,11,1,14,29,7,8,10,9,21,7,18,46,230,1,8,22,1,31,194,30,11,69,8,33,3,4,8,52,2,34,31,1,7,9,128,2,2,12,15,17,15,17,15,17,8,7,1,2,4,74,6,25,2,16,3,619,4,5,3,85,7,9,1,15,4,19,1,6,8,66,3,3,2,56,2,14,3,3,4,6,3,3,2,32,3,3,2,40,3,3,4,6,3,3,2,72,257,2,3,42,11,37,81,3,116,3,6,1,2,5,2,5,52,4,28,35,2,7,13,9,11,5,3,2,335,6,5,8,2,23,4,17,6,5,2,8,15,2,1,6,2,2,26,40,2,2,2,8,18,1,16,1,2,1,36,4,2,9,2,22,2,2,2,7,7,6,23,1,6,2,31,15,2,22,2,2,2,7,13,5,1,2,55,11,4,2,4,1,4,1,4,1,4,3,2,2,4,5,14,5,17,2,2,1,35,4,2,1,2,6,2,21,3,1,3,7,36,1,39,4,2,1,2,6,2,21,2,2,2,8,17,2,22,3,32,1,2,1,2,1,2,6,2,21,3,1,5,5,13,4,3,1,15,2,2,1,35,3,6,6,2,21,3,1,3,7,6,13,17,9,31,53,60,40,15,1,2,5,2,23,6,10,8,24,2,14,27,21,11,1,10,32,37,37,1,47,1,2,30,29,5,13,2,1,1,2,11,1,8,1,18,98,2,1,36,9,2,31,17,1,6,2,1,5,12,1,101,1,5,40,1,5,4,37,2,47,1,117,9,129,1,8,2,82,2,19,4,2,3,1,7,2,4,1,3,3,113,16,4,6,1,4,9,5,3,1,9,3,1,17,1,26,2,67,1,139,1,3,1,3,2,58,1,127,1,7,2,30,2,22,70,25,7,25,3,2,60]],B2:[[8212],[1,11834]],BA:[[20827,79,19190,3414,225,795,1422,200,1159,49,22452,1500,2,30221,419,17,11,1,39,2,167,113,3232,9,47,23,2102,2,344,640,159,911,77,6,75,41,2381,52,1245,49,115,9],[3,27631,1,862,2,200,1,17914,4,2091,4,415,1,5,2,86,3,251,2,518,2,250,1,106,14,6,1,359,1,12,3,527,1,2,1,89,2,23,1,130,3,127,3,118,1,1288,6,68,5,153,7,2382,2,22031,1,145,2,148,2,152,1,95,1,471,4,500,1,30383,1,4,7,5,2,8,1,2,1,3,3,21,7,274,2,3228,1,2,3,69,1,8,2,2,6,897,1,63,4,189,1,29,3,2,1,853,1,47,1,158,1,72,2,1696,1,139,1,355,1,1269,1,2404]],BB:[[555,6,93,1057,998,102,26745,35071,2039,2099,207,640,13,2456,19,4,532,180],[2,1074,12,28139,1,39075,1,198,1,2,1,3,2,3841]],BK:[[1,8232],[1,11]],CB:[[65532],[]],CJ:[[52852,14,7,2,2,32,26,2,2,2,2,19,7,2,2,32,26,2,2,2,2,12353],[3,18,2,45537,8,52584,15,250,1,95,1,12437]],CL:[[4503,431,2,5,13086,1,2,1,3,32,47,2,3,171,2,2,8,2,8,4,2,2,2,2,2,2,2,30,218,52515,2,2,2,4,2,2,2,2,429,2,2,2,45,2,2,2,1062,34,2,65,2,2,2,2,2,2,2,2,2,2,405,2,2,2,2,33,81,2,2,2,2,2,2,1087,31,2,635,16,56,2474,1887,2,3774,125],[1,285,2,13385,1,52722,1,28,1,12289]],CM:[[793939,2090,15,27430,20920,1,1,78,13,134,3,8,106,1,15,408,80,14,85,4,157,1,2,2,1,261,385,1,9,1,1,109,1,127,253,7,1,91,24,1,238,23,97,161,9,1,101,1,76,15,71,106,64,3,15,110,1,1,1473,1887,227,1759,20273,1,4,3,239,1,10,158,1,9,144,48,132,211,5,28,5,4,403,30266,694,3230,213,789,3,7,12,243,1,6,1,60,9,31,64,6,1,6,1,48,70,63,100,233,137,154,219,31,1871,141,2,2,351,12,73,42,10,135,7,1,2,59,69,56,4,41,10,13,62,43,10,13,1,1,2,59,52,4,13,57,14,36,21,57,5,39,10,17,59,52,17,1,1,55,262,236,161,84,85,8,1344,127],[239,129,95,792278,6,110,6,1505,3,438,6,262,4,2,1,2,6,3,16,2,6,1361,14,2,4,47,49,5,54,1980,2,149,3,31,6,3,7,1,7,1,5,4,2,1,1,543,22,3,45,4701,3,2,1,19628,1,94,3,8,54,1051,6,60,4,19450,1,1,1,351,1,2,1,2,4,69,6,2,1,6,5,123,1,2,1,2,6,3,21,85,5,2,6,407,1,2,12,47,2,1,1,1,5,19,3,3,5,41,9,34,3,1,1,3,3,1,2,149,1,3,1,2,5,246,1,2,8,1,2,375,5,1,1,110,1,3,1,1,7,1,2,83,1,28,1,2,1,1,3,3,3,1,2,236,1,2,1,1,3,3,5,1,2,108,2,1,1,1,7,1,2,193,4,4,6,3,1,21,2,3,1,3,3,2,1,2,1,56,1,1,1,22,7,1,2,169,1,3,1,1,2,1,2,96,3,9,1,1,8,1,2,50,1,58,1,17,7,2,4,37,2,70,1,1,1,1,3,1,2,47,1,12,1,45,14,179,3,50,10,154,1,388,3,574,1,171,2,41,3,6,1,2,2,1671,4,891,2,458,15,17,15,21014,1,2,1,2,1,244,1,1,1,182,1,1,1,1,1,1,1,1,5,105,2,1,1,1,1,1,3,1,1,50,2,45,1,1,10,26,7,53,17,27,1,1,15,51,1,90,1,1,1,306,1,81,1,33,9,2,2,30166,1,106,1,1,3,555,31,239,2,3071,11,1,2,2,3,1,12,97,9,56,4,27,1,527,63,199,1,16,6,2,12,2,2,153,1,1,1,1,7,1,7,49,1,1,2,3,2,1,1,59,2,2,1,1,1,1,3,33,1,13,8,39,1,2,4,3,4,51,3,50,15,2,13,150,1,1,1,220,2,1,5,2,1,5,2,1,1,1,3,1,2,154,1,120,2,152,1,31,1,31,1,30,2,947,2,929,35,2,10,6,1,2,4,2,13,50,1,37,1,293,1,19,7,4,2,1,2,76,1,31,1,22,2,2,2,2,3,1,2,2,1,56,1,1,1,29,1,12,1,8,1,1,1,2,1,3,4,61,1,31,1,12,1,8,3,2,2,2,3,1,2,59,2,53,2,2,2,4,1,2,1,91,1,12,1,9,1,3,1,3,3,62,1,3,5,23,1,22,1,3,1,2,4,1,2,60,1,16,1,35,2,3,1,5,1,1,2,60,1,30,1,22,1,3,1,3,3,1,2,59,1,31,1,11,6,2,1,2,3,1,7,1,2,60,2,1,28,2,23,43,7,61,2,44,4,2,2,2,8,2,3,35,8,59,10,92,26,67,3,2,1,3,5,3,6,119,20,49,10,75,1,2,1,4,44,264,1,1,4,276,12,8,11,2,78,609,25,2,4,97,17,6,8,0]],CP:[[52,41],[]],CR:[[13],[]],EB:[[68,81,23,3,576,12,29,275,22,208,25,2,19,181,66,117900,220,9757],[6,43,2,230,12,2,2,20,1,2,1,119,2,3,9,17,7,610,2,101,4,4,2,175,1,32,1,237,2,2,2,9,18,22,10,3,1,118,2,6,2,117941,3,9994]],EM:[[],[4,127995]],EX:[[7506,30,22771,30688,304,5,7653,1819,293,185,85,1415,30,33],[1,5997,1,64,1,21918,1,31266,1,1776,1,3613,1,315,1,5,1,2289,4,2286,2,1565]],GL:[[85941,30,10,2041,2300,6,4,3001,687,160],[6,74838,1,3191,6,860]],H2:[[28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,44032],[]],H3:[[],[26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,2,26,44033]],HL:[[33,64285],[9,2,1,2,1,4,4,2,12,2,9,62765,3,5,26,1488]],HY:[[45],[]],ID:[[22,3,455,832,13,2,17,12,727,221,16,61660,1,1,124,8,2,28,1,1,2,28,17,2,2,1,159,3,5,1,10,7,33,52192,337,25,2,60,2,2,2,3,25,2,60,2,2,2,5,13,16,25,1,2,1,2207,106,16,14,15,78,23,80,9752],[60594,1,4938,3,1501,1,1,1,541,1,3102,1,7472,1,13,1,5761,1,1,1,221,1,6,1,4152,1,31,1,42719,3,1021,257,8,8,7,1,7,1,5,1,9,1,9,4,2,1,4,1,10,1,2,1,28,1,8,1,6,1,2,1,4,1,2,1,4,1,1,1,13,1,11,85,33,18,16,8,60,2,55,4,1,11,8,2,5,9,7,2,1,14,77,1,1,1,1,31,7,41,5,11,7,57,3,13,14,2,3,1,11,1,6,1,3,86,11,117,2,1,12,1,2,1,15,1,4,1,10,2,10,2,8,4,15,2,34,54,2,4,68,1,5,7,23,9,60,3,3,2,20,2,3,3,41,25,12,15,15,8,76,5,3,2,4,6,13,4,6,8,3,2,2,20,20,12,1,3,65,6,45,4,1,2,1,4,4,2,4,3,22,3,21,2,132,1,153,1,5,1,13,1,1,1,6,1,8,1,3,1,43,1,12,1,2,27,55,63,2,94,2,14,9,1,36,2,14,2,14,1,1,1,14,1,11,1,99,1,3,1,43,15621,395,78,34,1,255,8952,8,513,767,9,6135,28708,2,3,5,3,5,3,5,4,30,3,44,23,25,7,25,3,2,3,9,9,1,3,1,156,2,3,2,16,2,1,3,3,1,17,1,1,1,818,37,1,105,1,1,1,365,21562,54,4,1142,2,20,1,20991,65,6591,1,255,1,63,1,14,1,38,1,9,1,31,1,14,10,29,1,9,2,30,29,35,1,31,1,9,1,3,1,1,2,93,2,42,11,3,3,5,2,5,6,30,2,24,22,5,2,5,6,30,2,24,11,1,4,2,1,1,2,3,8,8,14,1,23,11,27,213,13,88,2,25,1911,1,4,4,1,2,5,1,2,4,16,2,6,1,4,1,2,2,7,11,130,2,26,1,2,2,5,1,17,3,525,3,213,1,8986]],IN:[[3293,56106,8943],[2,8228]],IS:[[56780,6220,623,523,848,2,44],[1,63494,1,1489,1,58]],JL:[[],[28,38913,95,4352]],JT:[[],[48,50636,87,4520]],JV:[[],[22,50697,71,4448]],LF:[[10],[]],NL:[[133],[]],NS:[[1,28797,24400,28442,91,100,1,31,23,6191,6102],[2,34456,1,28737,1,131,1,197,1,52566,1,95,1,1,1,4178,2,10,1,8252]],NU:[[],[9,4759,9,1623,9,423,9,2369,49,27765,9,135,9,87,9,19639,9,71,9,247,9,759,9,103,9,423,9,103,9,103,9,375,9,119,9,343,9,279,9,145,9,61,9,129,9,813,9,2183,9,22695,9,407,9,87,9,23,9,199,9,39,9,679,9,35271,9,7,9,135,9,87,9,183,9,7,9,167,9,129,9,301,9,39,9,1863,9,71,9,279,9,71,9,119,9,97,9,119,9,119,9,119,9,119,9,119,9,119,9,119,9,119,9,119,9,413,9,199,9,132,1,2,9,1575,9,48]],OP:[[4503,190,241,2,13092,3,4,32,51,171,2,2,18,4,2,2,2,2,2,2,2,30,216,52514,3,2,2,2,4,2,2,2,2,429,2,2,2,19,26,2,2,2,10,1052,34,2,65,2,2,2,2,2,2,2,2,2,2,405,2,2,2,2,33,81,2,2,2,2,2,2,1087,31,2,635,16,56,39,4,2431,1887,2,3707,30,38,32,51,40],[1,46852,2,78424]],PO:[[4,60620,219,155,110,21956,34607,6,67,2,3,5,15,4910,896,911,95,1371,14,125,37],[3,65446,7,5693,1,1e3,1,1545]],PR:[[58142,221,155,56659,87,2276,2460,582,264,246,1132,1246,85,49,7,36],[1,56786,1,323,14,4,1,2,3,2,13,2,6,6305,1,1881,2,163]],QU:[[1,3,1,15,1,1,1,1,4,1,1,1,3528,1,26,2,4,1,8029,16,132,5,34],[2,116846,2,5,1,1696,5,1855,1,8219]],RI:[[],[25,127462]],SA:[[25,27721,27,1,1,15,1,51,1,1,1,10,138,1,36670,69,1,1,9,1,1,123,509,1,5,17,16,1817,14,1,1,11,33,34,7,7,363,9,12,12,33,62,21,3633],[6,5,1,15,4,2,3,1,1,1,2,3,26,27681,1,2,1,28,1,1,4,1,1,1,1,1,2,3,47,1,1,5,2,1,5,2,15,98,4,11,8,3,4,36659,5,2,6,36,9,1,5,1,7,1,1,5,6,4,52,65,1,21,25,5,43,12,4,3,29,381,10,1,1,2,7,1,6,2,1,1,51,1761,1,2,2,14,5,1,1,1,1,2,12,1,3,1,2,1,6,1,1,1,2,2,2,1,3,1,1,1,1,1,5,18,1,1,1,1,1,2,5,2,3,1,1,1,42,289,3,15,5,4,4,4,8,1,1,2,9,4,23,2,4,4,1,51,7,2,5,6,6,1,1,2,47,3585]],SG:[[],[1023,1,127,1,895,55296]],SP:[[32],[]],SY:[[47],[]],WJ:[[56991,8288],[]],XX:[[],[65533,3,65533,919297,6399,57344]],ZW:[[8203],[]],ZWJ:[[8205],[]]};let i,a=!1;function s(e,t){return l[t].has(e)}function f(e,t){for(let n=0;n<t.length;n++)if(l[t[n]].has(e))return!0;return!1}function c(e,t,n){n&&/\s/.test(t)?" "!==e[e.length-1]&&e.push(" "):e.length>0&&!f(e[e.length-1].charCodeAt(0),["BK","CR","LF","NL","SP","ZW"])&&f(t.charCodeAt(0),["CM","ZWJ"])?e[e.length-1]+=t:e.push(t)}function h(e,t,n){let o=e.get(t-1).charCodeAt(0),r=e.get(t).charCodeAt(0),l=e.get(t+1).charCodeAt(0),i=r;if(s(i,"SP")&&(i=o,s(i,"SP")))for(let n=t-2;s(i,"SP");n--)i=e.get(n).charCodeAt(0);return!(!n&&f(l,["SP","ZW"])||!s(i,"ZW")&&(s(r,"ZWJ")||(f(r,["CM","ZWJ"])&&(r="a".charCodeAt(0)),s(r,"WJ")||s(l,"WJ")||s(r,"GL")||s(l,"GL")&&!f(r,["SP","BA","HY"])||f(l,["CL","CP","EX","IS","SY"])||s(i,"OP")||s(i,"QU")&&s(l,"OP")||f(i,["CL","CP"])&&s(l,"NS")||s(i,"B2")&&s(l,"B2")||!s(r,"SP")&&(s(r,"QU")||s(l,"QU")||!s(r,"CB")&&!s(l,"CB")&&(s(r,"BB")||f(l,["BA","HY","NS"])||s(o,"HL")&&f(r,["HY","BA"])||s(r,"SY")&&s(l,"HL")||s(l,"IN")||f(r,["AL","HL"])&&s(l,"NU")||s(r,"NU")&&f(l,["AL","HL"])||s(r,"PR")&&f(l,["ID","EB","EM"])||f(r,["ID","EB","EM"])&&s(l,"PO")||f(r,["PR","PO"])&&f(l,["AL","HL"])||f(r,["AL","HL"])&&f(l,["PR","PO"])||f(r,["CL","CP","NU"])&&f(l,["PO","PR"])||f(r,["PO","PR"])&&s(l,"OP")||f(r,["PO","PR","HY","IS","NU","SY"])&&s(l,"NU")||s(r,"JL")&&f(l,["JL","JV","H2","H3"])||f(r,["JV","H2"])&&f(l,["JV","JT"])||f(r,["JT","H3"])&&s(l,"JT")||f(r,["JL","JV","JT","H2","H3"])&&f(l,["IN","PO"])||s(r,"PR")&&f(l,["JL","JV","JT","H2","H3"])||f(r,["AL","HL"])&&f(l,["AL","HL"])||s(r,"IS")&&f(l,["AL","HL"])||f(r,["AL","HL","NU"])&&s(l,"OP")||s(r,"CP")&&f(l,["AL","HL","NU"])||s(r,"EB")&&s(l,"EM"))))))}function u(e){let t="";for(let n=0;n<e.length;n++){const o=e[n];t+="\t"===o?i:o}return o.measureText(t).width}function g(e,t,n,o){for(;t.has(n+e.length)&&u(e)<o;)e.push(t.get(n+e.length));if(0===e.length)e.push(t.get(n));else for(;e.length>1&&u(e)>o;)e.length-=1}function p(e,t,n){for(;e.length>0&&u(e.concat(t))>n;)e.length-=1;e.push(t)}function d(e,t={}){normalizeTypographyOptions(t);const{font:n,fontKerning:r,tabSize:l}=t;o.font=n,o.fontKerning=r;const i=new Array(l).fill(" ").join("");return o.measureText(e.replace(/\t/g,i))}function L(e,t={}){!function(){if(!a){for(let e in l)if(l.hasOwnProperty(e)){const[t,n]=l[e],o=new Set;let r=0;for(let e=t.length;--e>=0;)r+=t[e],o.add(r);let i=0;for(let e=n.length-1;e>=0;e-=2){const t=n[e]+i;i=n[e-1]+t;for(let e=i+1;--e>=t;)o.add(e)}l[e]=o}a=!0}}(),function(e){"string"!=typeof e.font&&(e.font="10px sans-serif"),["auto","normal","none"].includes(e.fontKerning)||(e.fontKerning="auto"),"number"!=typeof e.tabSize&&(e.tabSize=8)}(t),function(e){"number"!=typeof e.maxWidth&&(e.maxWidth=r),"number"!=typeof e.maxLines&&(e.maxLines=r),"number"!=typeof e.indent&&(e.indent=0),"number"!=typeof e.lastIndent&&(e.lastIndent=0),"string"!=typeof e.etc&&(e.etc="…"),["collapse","preserve"].includes(e.newlines)||(e.newlines="collapse"),["collapse","trim","preserve"].includes(e.inlineSpaces)||(e.inlineSpaces="collapse")}(t);const{font:s,fontKerning:f,tabSize:d}=t;o.font=s,o.fontKerning=f,i=new Array(d).fill(" ").join("");const L=function(e,t={}){let{charLoaderFn:o,lineBreakOpportunityTestFn:l,lineFittingFn:i,etcLineFittingFn:a,typicalCharWidth:s,maxWidth:f,maxLines:c,indent:h,lastIndent:u,etc:g,newlines:p,inlineSpaces:d}=t;if(c<=0)return[];const L="collapse"===d||"trim"===d;let S=0,P=0;const m=e=>0===P?Math.ceil(e/s):Math.ceil(e/(S/P)),C=[],y=new n(e,{charLoaderFn:o,collapsesSpaces:"collapse"===d,collapsesNewlines:"collapse"===p,initialChunkSize:c===r?r:Math.max(1,Math.floor(1.2*c*m(f))),supplementalChunkSize:Math.max(1,2*m(f))});let x=!1,b=C.length,H=0;for(;;){let e=y.get(H);if(L)for(;/\s/.test(e);)H++,e=y.get(H);if(""===e){if(b===C.length){if(C.length===c){x=!0;break}C.push([])}if(y.enterNextSection()){H=0,b=C.length;continue}break}if(C.length===c){x=!0;break}const t=0===C.length?f-h:C.length===c-1?f-u:f,n=y.slice(H,H+m(t)+1);if(i(n,y,H,t),S+=t,P+=n.length,y.has(H+n.length)){let e=-1;for(let t=n.length-1;t>=0;t--)if(l(y,H+t,L)){e=t;break}e>-1&&e<n.length-1&&n.splice(e+1)}if(H+=n.length,L)for(;n.length>0&&/\s/.test(n[n.length-1]);)n.length-=1;C.push(n)}return x&&a(C[C.length-1],g,f-u),C}(e,{charLoaderFn:c,lineBreakOpportunityTestFn:h,lineFittingFn:g,etcLineFittingFn:p,typicalCharWidth:u(["a"]),...t});return{lines:L,font:o.font}}return t})()));