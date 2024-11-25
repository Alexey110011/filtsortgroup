sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller,JSONModel,Filter, FilterOperator) {
	"use strict";

	return Controller.extend("JSONModel.controller.View1", {
		onInit : function(){
				var oViewModel,
					
		 
			oViewModel = new sap.ui.model.json.JSONModel({
					/*worklistTableTitle : this.getResourceBundle().getText("worklistTableTitle"),
					shareOnJamTitle: this.getResourceBundle().getText("worklistTitle"),
					shareSendEmailSubject: this.getResourceBundle().getText("shareSendEmailWorklistSubject"),
					shareSendEmailMessage: this.getResourceBundle().getText("shareSendEmailWorklistMessage", [location.href]),
					tableNoDataText : this.getResourceBundle().getText("tableNoDataText"),*/
					tableBusyDelay : 0
				});
				this.setModel(oViewModel, "simpleView");
				
				//При создании через JS оказался недоступен id таблицы; поэтому использовал View.
				/*var oTable = new sap.m.Table({
					id:"myTable",
					    columns : [
						new sap.m.Column({
						header : new sap.m.Label({
							text:"Product"
						})
					}),
						new sap.m.Column({
							header : new sap.m.Label({
								text:"Price"
							})
						}),
						new sap.m.Column({
							header : new sap.m.Label({
								text:"Region"
							})
						})
					]
				});
					var oTemplate = new sap.m.ColumnListItem({
						type: "Navigation",
						navigated: true,
						press: "onPress",  // при нажатии не работает
						cells: [
							new sap.m.Text ({
								text: '{name}'
							}),
							new sap.m.Text ({
								text: '{price}'
							}),
							new sap.m.Text ({
								text: '{region}'
							})
						]
					});
					oTable.bindItems('/products', oTemplate);
					this.getView().byId("cont").addContent(oTable);*/
		},
		
			getModel : function (sName) {
				return this.getView().getModel(sName);
			},

			setModel : function (oModel, sName) {
				return this.getView().setModel(oModel, sName);
			},
			
			onFilter : function(oEvent){
				var aFilter = [];
				var sQuery = oEvent.getParameter('query');//,
				if (sQuery){
					aFilter.push(new Filter("region", FilterOperator.Contains,sQuery));
					aFilter.push(new Filter("name", FilterOperator.Contains,sQuery));
				}
				var oTable = this.byId("myTable");
				var oBinding = oTable.getBinding("items");
				oBinding.filter(aFilter);
			}
			
			/*onDrop: function (oInfo){
				var oDragged = oInfo.getParameter('draggedControl'),
					oDropped = oInfo.getParameter('droppedControl'),
					sInsertPosition = oInfo.getParameter('dropPosition'),
					
					oDraggedParent = oDragged.getParent(),
					oDroppedParent = oDropped.getParent(),
					
					oDragModel = oDraggedParent.getModel(),
					oDropModel = oDroppedParent.getModel(),
					oDragModelData = oDragModel.getData(),
					oDropModelData = oDropModel.getData(),
					
					iDragPosition = oDraggedParent.indexOfItem(oDragged),
					iDropPosition = oDroppedParent.indexOfItem(oDropped);
					
					var oItem = oDragModelData.datalist[iDragPosition];
					oDragModelData.datalist.splice(iDragPosition,1);
					
					if(oDragModel === oDropModel&&iDragPosition< iDropPosition){
						iDropPosition--;
					}
					
					if (sInsertPosition ==="Before"){
						oDropModelData.datalist.splice(iDropPosition, 0, oItem);
					} else {
						oDropModelData.datalist.splice(iDropPosition+1,0, oItem);
					}
					if( oDragModel !== oDropModel) {
						oDragModel.setData(oDragModelData);
						oDropModel.setData(oDropModelData);
					} else {
						oDropModel.setData(oDropModelData);
					}
			}*/
			
	});
});