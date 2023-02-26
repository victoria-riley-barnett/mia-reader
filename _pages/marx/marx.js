function selectaplace(form) {
var appname= navigator.appName;
var appversion=parseInt(navigator.appVersion);
if (appname == "Netscape" && appversion >= 3) {
var formindex=form.select1.selectedIndex;
var storage=form.select1.options[formindex].text;
if (form.select1.options[formindex].value != "none") {
var msg=storage+"You are now being transferred to the -> "+storage;
for (var spot=0;spot<msg.length-storage.length;spot++) {
var x=msg.substring(spot,msg.length);
form.select1.options[formindex].text=x;
for(var d=0;d<150;d++) { };
}
window.location=form.select1.options[formindex].value;
form.select1[formindex].text=storage;
} else  {
form.select1[formindex].text="Not a real option!";
for(var d=0;d<1250;d++) { };
form.select1[formindex].text=storage;
   }
}
else {
var formindex=form.select1.selectedIndex;
window.location=form.select1.options[formindex].value;
   }
}
function makeMyMenu() {
document.write ('<form><select name="select1" onChange="selectaplace(this.form)" size=1>');
document.write ('<option value="#">Select Section');
document.write ('<option value="works/date/index.htm">Works in Date Order');
document.write ('<option value="works/cw/index.htm">Collected Works');
document.write ('<option value="works/sw/index.htm">Selected Works');
document.write ('<option value="letters/index.htm">Letters');
document.write ('<option value="bio/index.htm">Biographies');
document.write ('<option value="photo/index.htm">Images');
document.write ('<option value="works/subject/statements/index.htm">Letters to the Editor');
document.write ('<option value="../../xlang/marx.htm">In other Languages');
document.write ('<option value="works/subject/guides/index.htm">Study Guides');
document.write ('<option value="works/subject/quotes/index.htm">Famous quotes');
document.write ('<option value="works/subject/newspapers/index.htm">Newspaper Articles');
document.write ('<option value="works/subject/speeches/index.htm">Speeches');
document.write ('<option value="works/subject/index.htm">Subject Index');
document.write ('<option value="works/subject/anarchism/index.htm">On Anarchism');
document.write ('<option value="works/subject/art/index.htm">On Art and Literature');
document.write ('<option value="works/subject/economy/index.htm">On Economics');
document.write ('<option value="works/subject/free-trade/index.htm">On Free Trade');
document.write ('<option value="works/subject/hist-mat/index.htm">On Historical Materialism');
document.write ('<option value="works/subject/ireland/index.htm">On Ireland');
document.write ('<option value="works/subject/organisation/index.htm">On Organisation');
document.write ('<option value="works/subject/philosophy/index.htm">On Philosophy');
document.write ('<option value="works/subject/poland/index.htm">On Poland');
document.write ('<option value="works/subject/precapitalist/index.htm">On Precapitalist societies');
document.write ('<option value="works/subject/religion/index.htm">On Religion');
document.write ('<option value="works/subject/russia/index.htm">On Russia');
document.write ('<option value="works/subject/science/index.htm">On Science');
document.write ('<option value="works/subject/war/index.htm">On War');
document.write ('<option value="works/subject/literature/index.htm">Poems and Plays');
document.write ('<option value="works/download/pdf.htm">PDF Files');
document.write ('<option value="works/1837-pre/index.htm">Early Writings');
document.write ('<option value="works/1848/communist-manifesto/index.htm">Communist Manifesto');
document.write ('<option value="iwma/index.htm">The First International');
document.write ('</select>');
document.write ('</form>');
}
makeMyMenu();



