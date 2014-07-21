Proj4js.Proj.laea={S_POLE:1,N_POLE:2,EQUIT:3,OBLIQ:4,init:function(){var t=Math.abs(this.lat0);if(Math.abs(t-Proj4js.common.HALF_PI)<Proj4js.common.EPSLN){this.mode=this.lat0<0.?this.S_POLE:this.N_POLE}else if(Math.abs(t)<Proj4js.common.EPSLN){this.mode=this.EQUIT}else{this.mode=this.OBLIQ}if(this.es>0){var s;this.qp=Proj4js.common.qsfnz(this.e,1.0);this.mmf=.5/(1.-this.es);this.apa=this.authset(this.es);switch(this.mode){case this.N_POLE:case this.S_POLE:this.dd=1.;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp);this.dd=1./this.rq;this.xmf=1.;this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp);s=Math.sin(this.lat0);this.sinb1=Proj4js.common.qsfnz(this.e,s)/this.qp;this.cosb1=Math.sqrt(1.-this.sinb1*this.sinb1);this.dd=Math.cos(this.lat0)/(Math.sqrt(1.-this.es*s*s)*this.rq*this.cosb1);this.ymf=(this.xmf=this.rq)/this.dd;this.xmf*=this.dd;break}}else{if(this.mode==this.OBLIQ){this.sinph0=Math.sin(this.lat0);this.cosph0=Math.cos(this.lat0)}}},forward:function(p){var x,y;var l=p.x;var a=p.y;l=Proj4js.common.adjust_lon(l-this.long0);if(this.sphere){var c,d,s;s=Math.sin(a);d=Math.cos(a);c=Math.cos(l);switch(this.mode){case this.OBLIQ:case this.EQUIT:y=(this.mode==this.EQUIT)?1.+d*c:1.+this.sinph0*s+this.cosph0*d*c;if(y<=Proj4js.common.EPSLN){Proj4js.reportError("laea:fwd:y less than eps");return null}y=Math.sqrt(2./y);x=y*d*Math.sin(l);y*=(this.mode==this.EQUIT)?s:this.cosph0*s-this.sinph0*d*c;break;case this.N_POLE:c=-c;case this.S_POLE:if(Math.abs(a+this.phi0)<Proj4js.common.EPSLN){Proj4js.reportError("laea:fwd:phi < eps");return null}y=Proj4js.common.FORTPI-a*.5;y=2.*((this.mode==this.S_POLE)?Math.cos(y):Math.sin(y));x=y*Math.sin(l);y*=c;break}}else{var c,e,s,q,f=0.0,g=0.0,b=0.0;c=Math.cos(l);e=Math.sin(l);s=Math.sin(a);q=Proj4js.common.qsfnz(this.e,s);if(this.mode==this.OBLIQ||this.mode==this.EQUIT){f=q/this.qp;g=Math.sqrt(1.-f*f)}switch(this.mode){case this.OBLIQ:b=1.+this.sinb1*f+this.cosb1*g*c;break;case this.EQUIT:b=1.+g*c;break;case this.N_POLE:b=Proj4js.common.HALF_PI+a;q=this.qp-q;break;case this.S_POLE:b=a-Proj4js.common.HALF_PI;q=this.qp+q;break}if(Math.abs(b)<Proj4js.common.EPSLN){Proj4js.reportError("laea:fwd:b < eps");return null}switch(this.mode){case this.OBLIQ:case this.EQUIT:b=Math.sqrt(2./b);if(this.mode==this.OBLIQ){y=this.ymf*b*(this.cosb1*f-this.sinb1*g*c)}else{y=(b=Math.sqrt(2./(1.+g*c)))*f*this.ymf}x=this.xmf*b*g*e;break;case this.N_POLE:case this.S_POLE:if(q>=0.){x=(b=Math.sqrt(q))*e;y=c*((this.mode==this.S_POLE)?b:-b)}else{x=y=0.}break}}p.x=this.a*x+this.x0;p.y=this.a*y+this.y0;return p},inverse:function(p){p.x-=this.x0;p.y-=this.y0;var x=p.x/this.a;var y=p.y/this.a;var l,a;if(this.sphere){var c=0.0,r,s=0.0;r=Math.sqrt(x*x+y*y);a=r*.5;if(a>1.){Proj4js.reportError("laea:Inv:DataError");return null}a=2.*Math.asin(a);if(this.mode==this.OBLIQ||this.mode==this.EQUIT){s=Math.sin(a);c=Math.cos(a)}switch(this.mode){case this.EQUIT:a=(Math.abs(r)<=Proj4js.common.EPSLN)?0.:Math.asin(y*s/r);x*=s;y=c*r;break;case this.OBLIQ:a=(Math.abs(r)<=Proj4js.common.EPSLN)?this.phi0:Math.asin(c*this.sinph0+y*s*this.cosph0/r);x*=s*this.cosph0;y=(c-Math.sin(a)*this.sinph0)*r;break;case this.N_POLE:y=-y;a=Proj4js.common.HALF_PI-a;break;case this.S_POLE:a-=Proj4js.common.HALF_PI;break}l=(y==0.&&(this.mode==this.EQUIT||this.mode==this.OBLIQ))?0.:Math.atan2(x,y)}else{var b,C,q,d,e=0.0;switch(this.mode){case this.EQUIT:case this.OBLIQ:x/=this.dd;y*=this.dd;d=Math.sqrt(x*x+y*y);if(d<Proj4js.common.EPSLN){p.x=0.;p.y=this.phi0;return p}C=2.*Math.asin(.5*d/this.rq);b=Math.cos(C);x*=(C=Math.sin(C));if(this.mode==this.OBLIQ){e=b*this.sinb1+y*C*this.cosb1/d;q=this.qp*e;y=d*this.cosb1*b-y*this.sinb1*C}else{e=y*C/d;q=this.qp*e;y=d*b}break;case this.N_POLE:y=-y;case this.S_POLE:q=(x*x+y*y);if(!q){p.x=0.;p.y=this.phi0;return p}e=1.-q/this.qp;if(this.mode==this.S_POLE){e=-e}break}l=Math.atan2(x,y);a=this.authlat(Math.asin(e),this.apa)}p.x=Proj4js.common.adjust_lon(this.long0+l);p.y=a;return p},P00:.33333333333333333333,P01:.17222222222222222222,P02:.10257936507936507936,P10:.06388888888888888888,P11:.06640211640211640211,P20:.01641501294219154443,authset:function(e){var t;var A=new Array();A[0]=e*this.P00;t=e*e;A[0]+=t*this.P01;A[1]=t*this.P10;t*=e;A[0]+=t*this.P02;A[1]+=t*this.P11;A[2]=t*this.P20;return A},authlat:function(b,A){var t=b+b;return(b+A[0]*Math.sin(t)+A[1]*Math.sin(t+t)+A[2]*Math.sin(t+t+t))}};