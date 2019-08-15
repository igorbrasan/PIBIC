# PIBIC
Projeto de pesquisa para desenvolver um sistema de monitoramento com aplicação web. Criado com Mango automation, Matrikon opc simulation server, frontend em AngularJS.

If you are having any problems displaying values, try to put script like the following Mango/bin/ext-enabled/set-locale-brazil.bat

if "%1" == "init" (
rem Set the system language and locale properties to Brazil's
set JAVAOPTS=%JAVAOPTS% -Duser.country=BR -Duser.language=pt-BR
)

