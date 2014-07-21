Proj4js.Proj.somerc={init:function(){var p=this.lat0;this.lambda0=this.long0;var s=Math.sin(p);var a=this.a;var i=this.rf;var f=1/i;var b=2*f-Math.pow(f,2);var e=this.e=Math.sqrt(b);this.R=this.k0*a*Math.sqrt(1-b)/(1-b*Math.pow(s,2.0));this.alpha=Math.sqrt(1+b/(1-b)*Math.pow(Math.cos(p),4.0));this.b0=Math.asin(s/this.alpha);this.K=Math.log(Math.tan(Math.PI/4.0+this.b0/2.0))-this.alpha*Math.log(Math.tan(Math.PI/4.0+p/2.0))+this.alpha*e/2*Math.log((1+e*s)/(1-e*s))},forward:function(p){var a=Math.log(Math.tan(Math.PI/4.0-p.y/2.0));var c=this.e/2.0*Math.log((1+this.e*Math.sin(p.y))/(1-this.e*Math.sin(p.y)));var S=-this.alpha*(a+c)+this.K;var b=2.0*(Math.atan(Math.exp(S))-Math.PI/4.0);var I=this.alpha*(p.x-this.lambda0);var r=Math.atan(Math.sin(I)/(Math.sin(this.b0)*Math.tan(b)+Math.cos(this.b0)*Math.cos(I)));var d=Math.asin(Math.cos(this.b0)*Math.sin(b)-Math.sin(this.b0)*Math.cos(b)*Math.cos(I));p.y=this.R/2.0*Math.log((1+Math.sin(d))/(1-Math.sin(d)))+this.y0;p.x=this.R*r+this.x0;return p},inverse:function(p){var Y=p.x-this.x0;var X=p.y-this.y0;var r=Y/this.R;var a=2*(Math.atan(Math.exp(X/this.R))-Math.PI/4.0);var b=Math.asin(Math.cos(this.b0)*Math.sin(a)+Math.sin(this.b0)*Math.cos(a)*Math.cos(r));var I=Math.atan(Math.sin(r)/(Math.cos(this.b0)*Math.cos(r)-Math.sin(this.b0)*Math.tan(a)));var l=this.lambda0+I/this.alpha;var S=0.0;var c=b;var d=-1000.0;var i=0;while(Math.abs(c-d)>0.0000001){if(++i>20){Proj4js.reportError("omercFwdInfinity");return}S=1.0/this.alpha*(Math.log(Math.tan(Math.PI/4.0+b/2.0))-this.K)+this.e*Math.log(Math.tan(Math.PI/4.0+Math.asin(this.e*Math.sin(c))/2.0));d=c;c=2.0*Math.atan(Math.exp(S))-Math.PI/2.0}p.x=l;p.y=c;return p}};