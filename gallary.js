function colo() 
        { 
            var col=["a.PNG", "b.PNG", "c.PNG", "d.PNG", "e.PNG", "f.PNG", "g.PNG", "h.PNG"]
            var len=col.length;
            var ran= Math.random()*len;
            var rannum=Math.round(ran);
            document.getElementById("a").style.backgroundImage="URL("+col[rannum]+")"
            var updatethetime = setTimeout(function(){colo()},1000)
           
        }
        function dcolo() 
        { 
            var col=["da.PNG", "db.PNG", "dc.PNG", "dd.PNG", "de.PNG", "df.PNG", "dg.PNG", "dh.PNG"]
            var len=col.length;
            var ran= Math.random()*len;
            var rannum=Math.round(ran);
            document.getElementById("a").style.backgroundImage="URL("+col[rannum]+")"
            var updatethetime = setTimeout(function(){dcolo()},1000)
           
        }
        function kcolo() 
        { 
            var col=["ka.PNG", "kb.PNG", "kc.PNG", "kd.PNG", "ke.PNG", "kf.PNG", "kg.PNG", "kh.PNG"]
            var len=col.length;
            var ran= Math.random()*len;
            var rannum=Math.round(ran);
            document.getElementById("a").style.backgroundImage="URL("+col[rannum]+")"
            var updatethetime = setTimeout(function(){kcolo()},1000)
           
        }
// from here gallary code starts

function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
    
}