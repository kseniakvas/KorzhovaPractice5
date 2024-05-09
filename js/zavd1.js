window.onload = function() {
    var name = prompt('Enter you name','');
    var position = prompt('Enter your position','');
    var phone = prompt('Enter your phone','');
    var visitcard = ' <TABLE width="100%" border="0">'
+' <TR>'
+' <TD align="CENTER" valign="CENTER">'
+' <IMG src="images/visit_card.jpg">'
+' </TD>'
+' <TD align="CENTER">'
+' <B>' + name + '</B><BR>'
+' <I>' + position + '</I><BR>'
+' <FONT color="blue">' + phone + '</FONT>'
+' </TD>'
+' </TR>'
+' </TABLE>';

document.write('<TABLE width="100%" border="0" align="CENTER">');
for(var y=0; y<12; y++)
{
document.write('<TR>');
for(var x=0; x<3; x++)
{
document.write( '<TD align="CENTER" style="border-style: dashed; border-width:thin;">');
document.write( visitcard );
document.write('</TD>');
}
document.write('</TR>');
}
document.write('</TABLE>');
document.write('<button> <a href="index.html">Main menu</a></button> ');
}

