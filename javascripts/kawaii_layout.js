(function(){$(function(){var a,e,r,t,n,d,c,i,o,s,l,f,u,h,g,v,p,y,j,b,m,w;for(e=3,n=3,t=1.2,r=.01,s=.9,p=40,v=80,$("#add-art").on("click",function(a){var e,r,t,n,d;for(n=$("canvas"),d=[],r=0,t=n.length;t>r;r++)e=n[r],d.push(e.addArt());return d}),y=$("canvas"),b=[],u=0,g=y.length;g>u;u++){for(c=y[u],o=$(c),l=new createjs.Point(o.data("gravity-x"),o.data("gravity-y")),m=50,w=new createjs.Stage(c),i=["#828b20","#b0ac31","#cbc53d","#fad779","#f9e4ad","#faf2db","#563512","#9b4a0b","#d36600","#fe8a00","#f9a71f"],a=[],d=[],c.addArt=function(){var e,r,t,d,o,s,l,f,u,h;for(e=new createjs.Shape,e.radius=Math.random()*(v-p)+p,t=d=l=m;0>=l?0>=d:d>=0;t=0>=l?++d:--d)e.graphics.beginFill(i[Math.random()*i.length|0]).drawCircle(0,0,e.radius*t/m);for(e.x=c.width*(.5+.4*Math.random()-.2),e.y=(null!=(f=null!=(u=a[a.length-1])?u.y:void 0)?f:0)+e.radius,e.mass=n-a.length,e.mass<=0&&(e.mass=1),e.velocity=new createjs.Point(0,0),e.force=new createjs.Point(0,0),e.snapToPixel=!0,e.cache(-e.radius,-e.radius,2*e.radius,2*e.radius),h=a.slice(a.length-n),s=0,o=h.length;o>s;s++)r=h[s],c.addBondFor(e,r);return a.push(e),w.addChild(e),e},c.addBondFor=function(a,e){return d.push({arts:[a,e],length:(a.radius+e.radius)*t})},f=h=0,j=e;j>=0?j>h:h>j;f=j>=0?++h:--h)c.addArt();createjs.Ticker.timingMode=createjs.Ticker.RAF,b.push(createjs.Ticker.addEventListener("tick",function(e){var t,n,c,i,o,f,u,h,g,v,p,y,j,b,m;for(p=0,h=d.length;h>p;p++)i=d[p],n=i.arts[0],c=i.arts[1],m=c.position().subtract(n.position()),u=m.length(),o=m.scale(1/u),f=o.scale((u-i.length)*r),n.force=n.force.add(f),c.force=c.force.add(f.scale(-1));for(y=0,g=a.length;g>y;y++)t=a[y],t.force=t.force.add(l),t.velocity=t.velocity.add(t.force).scale(1/t.mass*s),t.force=new createjs.Point(0,0);for(j=0,v=a.length;v>j;j++)t=a[j],b=t.position().add(t.velocity),t.x=b.x,t.y=b.y;return w.update(e)}))}return b})}).call(this);