(function(){$(function(){var e,a,t,r,n,o,i,c,s,d,l,h,f,g,u,v,p,y;if(i=$("canvas#spring")[0]){for(a=6,n=6,r=1.2,t=.05,p=.1,d=.9,u=40,g=80,s=$(i),l=new createjs.Point(s.data("gravity-x"),s.data("gravity-y")),y=new createjs.Stage(i),e=[],o=[],c=!1,i.addArt=function(){var a,t,r,o,c,s,d,l;for(c=Math.floor(Math.random()*(g-u)+u),a=new Baumkuchen(c),a.x=i.width*(.5+.4*Math.random()-.2),a.y=(null!=(s=null!=(d=e[e.length-1])?d.y:void 0)?s:0)+a.radius,a.mass=Math.max(1,n-e.length),l=e.slice(Math.max(0,e.length-n)),r=0,o=l.length;o>r;r++)t=l[r],i.addBondFor(a,t);return e.push(a),y.addChild(a),a},i.toggleDebug=function(){var e,a,t;if(c=!c,!c)for(a=0,t=o.length;t>a;a++)e=o[a],e.shape.graphics.clear();return c},i.addBondFor=function(e,a){var t;return t=new createjs.Shape,o.push({arts:[e,a],length:(e.radius+a.radius)*r,shape:t}),y.addChild(t)},h=f=0,v=a;v>=0?v>f:f>v;h=v>=0?++f:--f)i.addArt();return createjs.Ticker.timingMode=createjs.Ticker.RAF,createjs.Ticker.addEventListener("tick",function(a){var r,n,i,s,h,f,g,u,v,m,x,j,k,w,M,T,S;for(g=0,m=o.length;m>g;g++)s=o[g],n=s.arts[0],i=s.arts[1],S=i.position().subtract(n.position()),v=S.length(),h=S.scale(1/v),f=h.scale(-p/v*v+(v-s.length)*t),n.force=n.force.add(f),i.force=i.force.add(f.scale(-1));for(u=0,x=e.length;x>u;u++)r=e[u],r.force=r.force.add(l),r.velocity=r.velocity.add(r.force).scale(1/r.mass*d),r.force=new createjs.Point(0,0);for(w=0,j=e.length;j>w;w++)r=e[w],T=r.position().add(r.velocity),r.x=T.x,r.y=T.y;if(c)for(M=0,k=o.length;k>M;M++)s=o[M],s.shape.graphics.clear().beginStroke("#333").moveTo(s.arts[0].x,s.arts[0].y).lineTo(s.arts[1].x,s.arts[1].y).endStroke();return y.update(a)})}})}).call(this);