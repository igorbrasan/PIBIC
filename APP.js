<div ng-cloak>
    
    <ma-get-point-value point-xid="CORRENTE_PLACA" point="CORRENTE"></ma-get-point-value>
    <ma-get-point-value point-xid="CORRENTE_INJETADA" point="CORRENTE_INJETADA"></ma-get-point-value>
    <ma-get-point-value point-xid="CORRENTE_EFICAZ" point="CORRENTE_EFICAZ"></ma-get-point-value>
    <ma-get-point-value point-xid="IRRADIANCIA" point="IRRADIANCIA"></ma-get-point-value>
    <ma-get-point-value point-xid="POTENCIA_PLACA" point="POTENCIA"></ma-get-point-value>
    <ma-get-point-value point-xid="TEMPERATURA" point="TEMPERATURA"></ma-get-point-value>
    <ma-get-point-value point-xid="TENSAO_BARRAMENTO" point="TENSAO_BARRAMENTO"></ma-get-point-value>
    <ma-get-point-value point-xid="TENSAO_PLACA" point="TENSAO_PLACA"></ma-get-point-value>
    <ma-get-point-value point-xid="TENSAO_REDE" point="TENSAO_REDE"></ma-get-point-value>
    
<md-content>
<md-tabs md-dynamic-height md-center-tabs md-border-bottom>
<md-tab label="Geral">
    <div layout-column>
        <md-content class="md-padding">
            <div layout="row">
             <md-card flex="">
                <md-card-content>
                            <center>
                                <h3> Temperatura</h3>
                            <ma-gauge-chart point="TEMPERATURA" start="0" band-1-end="30" band-2-end="40" band-2-color="yellow" band-3-end="70" value-font-size="16" value-offset="-50" tick-interval="10" arrow-inner-radius="30" arrow-alpha="0.7" axis-thickness="15" axis-alpha="0.1" style="width:100%; height:200px"></ma-gauge-chart>

                            </center>
                            </md-card-content>
                            </md-card>
            <md-card flex="">
                <md-card-content>
                            <center>
                                <h3> Potência Gerada</h3>
                            <ma-gauge-chart point="POTENCIA" interval="150" start="0" end="1000" style="width:100%; height:200px"></ma-gauge-chart>

                            </center>
                            </md-card-content>
                            </md-card>
                            </div>
                <div layout="row">
            <md-card flex="">
                <md-card-content>
                            <center>
                                <h3> Corrente Injetada</h3>
                            <ma-gauge-chart point="CORRENTE_INJETADA" start="-10" band-1-end="5" band-1-color="yellow"band-2-end="20" band-2-color="green" band-3-end="30" band-3-color="red" value-font-size="16" value-offset="-50" tick-interval="10" arrow-inner-radius="30" arrow-alpha="0.7" axis-thickness="15" axis-alpha="0.1" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                            </md-card-content>
                            </md-card> 
            <md-card flex="">
                <md-card-content>
                            <center>
                                <h3> Irradiância</h3>
                            <ma-gauge-chart point="IRRADIANCIA" interval="150" start="0" end="1000" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                            </md-card-content>
                            </md-card>
                             </div>
        </md-content>

       </div>
      </md-tab>
      
      
      
      
      
      
      
      
      
<md-tab label="Corrente">
        <md-content class="md-padding">
          <div layout="column">
                <md-card flex >
                    <md-card-content>
                         <center> <h2 class="md-display-2">Corrente</h2> </center>
                    </md-card-content>
                </md-card>
                <div layout="column">
                    <md-card flex="">
                        <md-card-content>
                             <div layout="row" layout-xs="column">
                             <md-card flex=""><md-card-content>
                            <center>
                                <h3> Gerada</h3>
                            <ma-gauge-chart point="CORRENTE" start="-10" band-1-end="5" band-1-color="yellow"band-2-end="20" band-2-color="green" band-3-end="30" band-3-color="red" value-font-size="16" value-offset="-50" tick-interval="10" arrow-inner-radius="30" arrow-alpha="0.7" axis-thickness="15" axis-alpha="0.1" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                            </md-card-content>
                            </md-card>
                            <md-card flex=""><md-card-content>
                            <center>
                                <h3> Injetada</h3>
                            <ma-gauge-chart point="CORRENTE_INJETADA" start="-10" band-1-end="5" band-1-color="yellow"band-2-end="20" band-2-color="green" band-3-end="30" band-3-color="red" value-font-size="16" value-offset="-50" tick-interval="10" arrow-inner-radius="30" arrow-alpha="0.7" axis-thickness="15" axis-alpha="0.1" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                            </md-card-content>
                            </md-card>
                            </div>
                        </md-card-content>
                    </md-card>
                    <md-card flex="">
                        
                            <md-card-content>
                            <ma-point-statistics point="CORRENTE" from="dateBar.from" to="dateBar.to" statistics="statsObj"></ma-point-statistics>
            <md-card><md-card-content> O ponto "{{CORRENTE.name}}" tem o valor atual de {{CORRENTE.renderedValue}}.</md-card-content></md-card>
            <md-card><md-card-content> O valor médio de "{{CORRENTE.name}}" é {{ statsObj.average.value }}.</md-card-content></md-card>
            <md-card><md-card-content>O valor máximo de "{{CORRENTE.name}}" é {{ statsObj.maximum.value }}. </md-card-content></md-card>
            <md-card><md-card-content>Hora atual:
    {{ statsObj.maximum.timestamp | maMoment:'format':'lll' }}</md-card-content></md-card>
                </md-card-content>
                </md-card>
                   
                </div>
            <md-card>
            <md-card-content>
                <center>
                    <div layout="column" layout-gt-sm="row" layout-align="end center">
        <div layout>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='DAY_SO_FAR'">
                HOJE
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='MONTH_SO_FAR'">
                ESSE MÊS
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='PREVIOUS_MONTH'">
                MÊS PASSADO
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='YEAR_SO_FAR'">
                ANO
            </md-button>
        </div>
    </div>
    </center>
<ma-point-values point-xid="CORRENTE_PLACA" values="CORRENTE_PLACAValues" from="dateBar.from" to="dateBar.to" rollup="{{dateBar.rollupType}}" rollup-interval="{{dateBar.rollupIntervals}} {{dateBar.rollupIntervalPeriod}}">
</ma-point-values>
<h4>Corrente gerada</h4>
<ma-serial-chart style="height: 300px; width: 100%" series-1-values="CORRENTE_PLACAValues" series-1-point="CORRENTE_PLACA" legend="true" balloon="true" export="true">
    
</ma-serial-chart>
            </md-card-content>
            </md-card>
            <md-card>
            <md-card-content>
                <center>
                    <div layout="column" layout-gt-sm="row" layout-align="end center">
        <div layout>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='DAY_SO_FAR'">
                HOJE
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='MONTH_SO_FAR'">
                ESSE MÊS
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='PREVIOUS_MONTH'">
                MÊS PASSADO
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='YEAR_SO_FAR'">
                ANO
            </md-button>
        </div>
    </div>
    </center>
<ma-point-values point-xid="CORRENTE_INJETADA" values="CORRENTE_INJETADAValues" from="dateBar.from" to="dateBar.to" rollup="{{dateBar.rollupType}}" rollup-interval="{{dateBar.rollupIntervals}} {{dateBar.rollupIntervalPeriod}}">
</ma-point-values>
<h4>Corrente injetada</h4>
<ma-serial-chart style="height: 300px; width: 100%" series-1-values="CORRENTE_INJETADAValues" series-1-point="CORRENTE_INJETADA" legend="true" balloon="true" export="true">
    
</ma-serial-chart>
            </md-card-content>
            </md-card>
            <md-card>
            <md-card-content>
                <center>
                    <div layout="column" layout-gt-sm="row" layout-align="end center">
        <div layout>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='DAY_SO_FAR'">
                HOJE
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='MONTH_SO_FAR'">
                ESSE MÊS
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='PREVIOUS_MONTH'">
                MÊS PASSADO
            </md-button>
            <md-button class="md-raised md-accent md-hue-3" ng-click="dateBar.preset ='YEAR_SO_FAR'">
                ANO
            </md-button>
        </div>
    </div>
    </center>
<ma-point-values point-xid="CORRENTE_EFICAZ" values="CORRENTE_EFICAZValues" from="dateBar.from" to="dateBar.to" rollup="{{dateBar.rollupType}}" rollup-interval="{{dateBar.rollupIntervals}} {{dateBar.rollupIntervalPeriod}}">
</ma-point-values>
<h4>Corrente eficaz</h4>
<ma-serial-chart style="height: 300px; width: 100%" series-1-values="CORRENTE_EFICAZValues" series-1-point="CORRENTE_EFICAZ" legend="true" balloon="true" export="true">
    
</ma-serial-chart>
            </md-card-content>
            </md-card>
        </md-content>
</md-tab>








<md-tab label="Potência">
        <md-content class="md-padding">
          <div layout="column">
                <md-card flex >
                    <md-card-content>
                         <center> <h2 class="md-display-2">Potência</h2> </center>
                    </md-card-content>
                </md-card>
                <div layout="row" layout-xs= "column">
                    <md-card flex="">
                        <md-card-content>
                            <center>
                           <h3> Potência Gerada</h3>
                            <ma-gauge-chart point="POTENCIA" interval="60" start="0" end="1000" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                        </md-card-content>
                    </md-card>
                    <md-card flex="">
                            <md-card-content>
                            <ma-point-statistics point="POTENCIA" from="dateBar.from" to="dateBar.to" statistics="statsObj"></ma-point-statistics>
<md-card><md-card-content> O ponto "{{POTENCIA.name}}" tem o valor atual de {{POTENCIA.renderedValue}}.</md-card-content></md-card>
<md-card><md-card-content> O valor médio de "{{POTENCIA.name}}" é {{ statsObj.average.value }}.</md-card-content></md-card>
<md-card><md-card-content>O valor máximo de "{{POTENCIA.name}}" é {{ statsObj.maximum.value }}. </md-card-content></md-card>
<md-card><md-card-content>Hora atual:
    {{ statsObj.maximum.timestamp | maMoment:'format':'lll' }}</md-card-content></md-card>
    </md-card-content>
                </md-card>
                   
                </div>
      <md-card>
          <md-card-content>
              <ma-point-values point-xid="POTENCIA" values="POTENCIAValues" from="dateBar.from" to="dateBar.to" rollup="{{dateBar.rollupType}}" rollup-interval="{{dateBar.rollupIntervals}} {{dateBar.rollupIntervalPeriod}}">
</ma-point-values>
<ma-serial-chart style="height: 300px; width: 100%" series-1-values="POTENCIAValues" series-1-point="POTENCIA" legend="true" balloon="true" export="true">
          </md-card-content>
      </md-card>
            </div>
        </md-content>
      </md-tab>
      
    
    
      
      
<md-tab label="Tensão">
        <md-content class="md-padding">
          <div layout="column">
                <md-card flex >
                    <md-card-content>
                         <center> <h2 class="md-display-2">Tensão</h2> </center>
                    </md-card-content>
                </md-card>
                <div layout="row" layout-sm= "column">
                    <md-card flex="">
                        <md-card-content>
                            <center>
                                <h3>Tensão no Gerador</h3>
                            <ma-gauge-chart point="TENSAO_PLACA" interval="20" start="0" end="300" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                        </md-card-content>
                    </md-card>
                    <md-card flex="">
                        <md-card-content>
                            <center>
                                <h3>Tensão na Rede</h3>
                            <ma-gauge-chart point="TENSAO_REDE" interval="20" start="0" end="300" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                        </md-card-content>
                    </md-card>
                    </div>
                    <md-card flex="">
                            <md-card-content>
                            <ma-point-statistics point="TENSAO_PLACA" from="dateBar.from" to="dateBar.to" statistics="statsObj"></ma-point-statistics>
<md-card><md-card-content> O ponto "{{TENSAO_PLACA.name}}" tem o valor atual de {{TENSAO_PLACA.renderedValue}}.</md-card-content></md-card>
<md-card><md-card-content> O ponto "{{TENSAO_BARRAMENTO.name}}" tem o valor atual de {{TENSAO_BARRAMENTO.renderedValue}}.</md-card-content></md-card>
<md-card><md-card-content> O ponto "{{TENSAO_REDE.name}}" tem o valor atual de {{TENSAO_REDE.renderedValue}}.</md-card-content></md-card>

<md-card><md-card-content>Hora atual:
    {{ statsObj.maximum.timestamp | maMoment:'format':'lll' }}</md-card-content></md-card>
    </md-card-content>
                </md-card>
                   
      <md-card>
          <md-card-content>
              <ma-serial-chart style="height: 300px; width: 100%" series-1-values="TENSAO_PLACAValues" series-1-point="TENSAO_PLACA" legend="true" balloon="true" export="true">
</ma-serial-chart>
          </md-card-content>
      </md-card>
      
                   
                
      <md-card>
          <md-card-content>
              <ma-serial-chart style="height: 300px; width: 100%" series-1-values="TENSAO_REDEValues" series-1-point="TENSAO_REDE" series-1-values="TENSAO_BARRAMENTOValues" series-1-point="TENSAO_BARRAMENTO" legend="true" balloon="true" export="true">
</ma-serial-chart>
          </md-card-content>
      </md-card>
            </div>
        </md-content>          
</md-tab>






     <md-tab label="Temperatura">
        <md-content class="md-padding">
          <div layout="column">
                <md-card flex >
                    <md-card-content>
                         <center> <h2 class="md-display-2">Temperatura</h2> </center>
                    </md-card-content>
                </md-card>
                <div layout="row" layout-sm= "column">
                    <md-card flex="">
                        <md-card-content>
                            <center>
                            <ma-gauge-chart point="TEMPERATURA" start="0" band-1-end="10" band-1-color="yellow"band-2-end="30" band-2-color="green" band-3-end="60" band-3-color="red" value-font-size="16" value-offset="-50" tick-interval="10" arrow-inner-radius="30" arrow-alpha="0.7" axis-thickness="15" axis-alpha="0.1" style="width:100%; height:200px"></ma-gauge-chart>
                            </center>
                        </md-card-content>
                    </md-card>
                    <md-card flex="">
                            <md-card-content>
                            <ma-point-statistics point="TEMPERATURA" from="dateBar.from" to="dateBar.to" statistics="statsObj"></ma-point-statistics>
<md-card><md-card-content> O ponto "{{TEMPERATURA.name}}" tem o valor atual de {{TEMPERATURA.renderedValue}}.</md-card-content></md-card>
<md-card><md-card-content>Hora atual:
    {{ statsObj.maximum.timestamp | maMoment:'format':'lll' }}</md-card-content></md-card>
    </md-card-content>
                </md-card>
                   
                </div>
      <md-card>
          <md-card-content>
              <ma-serial-chart style="height: 300px; width: 100%" series-1-values="TEMPERATURAValues" series-1-point="TEMPERATURA" legend="true" balloon="true" export="true">
</ma-serial-chart>
          </md-card-content>
      </md-card>
            </div>
        </md-content>          
      </md-tab>
      
      
      
      <md-tab label="Irradiância">
        <md-content class="md-padding">
          <div layout="column">
                <md-card flex >
                    <md-card-content>
                         <center> <h2 class="md-display-2">Irradiância</h2> </center>
                    </md-card-content>
                </md-card>
                <div layout="row" layout-sm= "column">
                    <md-card flex="">
                        <md-card-content>
                            <center>
                             <ma-gauge-chart point="IRRADIANCIA" interval="100" start="0" end="1000" style="width:100%; height:200px"></ma-gauge-chart>
                        </md-card-content>
                    </md-card>
                    <md-card flex="">
                            <md-card-content>
                            <ma-point-statistics point="IRRADIANCIA" from="dateBar.from" to="dateBar.to" statistics="statsObj"></ma-point-statistics>
<md-card><md-card-content> O ponto "{{IRRADIANCIA.name}}" tem o valor atual de {{IRRADIANCIA.renderedValue}}.</md-card-content></md-card>
<md-card><md-card-content> O valor médio de "{{IRRADIANCIA.name}}" é {{ statsObj.average.value }}.</md-card-content></md-card>
<md-card><md-card-content>O valor máximo de "{{IRRADIANCIA.name}}" é {{ statsObj.maximum.value }}. </md-card-content></md-card>
<md-card><md-card-content>Hora atual:
    {{ statsObj.maximum.timestamp | maMoment:'format':'lll' }}</md-card-content></md-card>
    </md-card-content>
                </md-card>
                   
                </div>
      <md-card>
          <md-card-content>
              <ma-serial-chart style="height: 300px; width: 100%" series-1-values="IRRADIANCIAValues" series-1-point="IRRADIANCIA" legend="true" balloon="true" export="true">
</ma-serial-chart>
          </md-card-content>
      </md-card>
            </div>
        </md-content>          
    </md-tab>
</md-tabs>
</md-content>
</div>
