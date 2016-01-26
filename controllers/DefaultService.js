'use strict';

exports.propertiesGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * address (String)
   * start (Integer)
   * count (Integer)
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "area" : "aeiou",
  "rollNumFormatted" : "aeiou",
  "jurisdictionDesc" : "aeiou",
  "propertyAddress" : "aeiou",
  "jurisdiction" : "aeiou",
  "id" : "aeiou",
  "rollNum" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.propertiesIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * id (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "basementFinishArea" : "",
  "rateCodeSummary" : "aeiou",
  "numUnitApt" : "",
  "postDirectional" : "aeiou",
  "jurisdictionDesc" : "aeiou",
  "commercialAdditionalBuildings" : true,
  "cityCode" : "aeiou",
  "jurisdiction" : "aeiou",
  "postalCode" : "aeiou",
  "unitNumber" : "aeiou",
  "carports" : "",
  "neighbourhoodCode" : "aeiou",
  "yearBuilt" : "",
  "streetName" : "aeiou",
  "landSize" : "aeiou",
  "province" : "aeiou",
  "preDirectional" : "aeiou",
  "strataTotalArea" : "",
  "basementFinishAreaComm" : "",
  "id" : "aeiou",
  "schoolDistrictCode" : "aeiou",
  "totalAssessedBuilding" : "",
  "farmFlag" : true,
  "rollNum" : "aeiou",
  "basementFinishAreaIncm" : "",
  "area" : "aeiou",
  "streetType" : "aeiou",
  "cityDesc" : "aeiou",
  "residentialAdditionalBuildings" : true,
  "streetNumber" : "aeiou",
  "propertyAddress" : "aeiou",
  "neighbourhoodDesc" : "aeiou",
  "totalAssessedLand" : "",
  "mobileHomeWidth" : "",
  "mobileHomeLength" : "",
  "bedrooms" : "",
  "garages" : "",
  "netLeasableArea" : "",
  "baths" : "",
  "totalAssessed" : "",
  "storiesBuilding" : "",
  "grossLeasableArea" : "",
  "rollNumFormatted" : "aeiou",
  "secondFloorArea" : "",
  "firstFloorArea" : "",
  "freeformAddress" : "aeiou",
  "moblieHomeTotalArea" : ""
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
