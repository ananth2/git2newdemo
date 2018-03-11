$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ananth ram"
    }
  ],
  "line": 3,
  "name": "Trak eye application login",
  "description": "",
  "id": "trak-eye-application-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag0"
    }
  ]
});
formatter.before({
  "duration": 8321537228,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "entering login credentials for trakeye application",
  "description": "",
  "id": "trak-eye-application-login;entering-login-credentials-for-trakeye-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "i have firefox browser opened on my desktop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Bang_North\" and \"Lab@1234\"  user name and password on the page as credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_have_firefox_browser_opened_on_my_desktop()"
});
formatter.result({
  "duration": 7333599215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bang_North",
      "offset": 9
    },
    {
      "val": "Lab@1234",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_and_user_name_and_password_on_the_page_as_credentials(String,String)"
});
formatter.result({
  "duration": 4006228456,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_log_in_successfully()"
});
formatter.result({
  "duration": 25863,
  "status": "passed"
});
formatter.uri("services.feature");
formatter.feature({
  "line": 1,
  "name": "service feature test",
  "description": "",
  "id": "service-feature-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "service create",
  "description": "",
  "id": "service-feature-test;service-create",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@service"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I click \"service\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter values \"\u003cname\u003e\",\"\u003cvalue\u003e\",\"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "service-feature-test;service-create;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 9,
      "id": "service-feature-test;service-create;;1"
    },
    {
      "cells": [
        "name1",
        "helo",
        "success"
      ],
      "line": 10,
      "id": "service-feature-test;service-create;;2"
    },
    {
      "cells": [
        "name2",
        "helo1",
        "Fail"
      ],
      "line": 11,
      "id": "service-feature-test;service-create;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 722931,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "service create",
  "description": "",
  "id": "service-feature-test;service-create;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@service"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I click \"service\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter values \"name1\",\"helo\",\"success\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "service",
      "offset": 9
    }
  ],
  "location": "Services.i_click(String)"
});
formatter.result({
  "duration": 2000082105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 16
    },
    {
      "val": "helo",
      "offset": 24
    },
    {
      "val": "success",
      "offset": 31
    }
  ],
  "location": "Services.i_enter_values(String,String,String)"
});
formatter.result({
  "duration": 6434646993,
  "status": "passed"
});
formatter.before({
  "duration": 651910,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "service create",
  "description": "",
  "id": "service-feature-test;service-create;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@service"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I click \"service\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter values \"name2\",\"helo1\",\"Fail\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "service",
      "offset": 9
    }
  ],
  "location": "Services.i_click(String)"
});
formatter.result({
  "duration": 1999550067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name2",
      "offset": 16
    },
    {
      "val": "helo1",
      "offset": 24
    },
    {
      "val": "Fail",
      "offset": 32
    }
  ],
  "location": "Services.i_enter_values(String,String,String)"
});
formatter.result({
  "duration": 5602993041,
  "status": "passed"
});
formatter.uri("usercreate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "trak eye case creation",
  "description": "I want to use this template for my feature file",
  "id": "trak-eye-case-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag3"
    }
  ]
});
formatter.before({
  "duration": 940919,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "trak-eye-case-creation;title-of-your-scenario-outline",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I want to write a step with",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I check for the in step",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I verify the  in step",
  "keyword": "Then "
});
formatter.match({
  "location": "CaseCreation.i_want_to_write_a_step_with()"
});
formatter.result({
  "duration": 45568,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreation.i_check_for_the_in_step()"
});
formatter.result({
  "duration": 4231881464,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreation.i_verify_the_in_step()"
});
formatter.result({
  "duration": 24631,
  "status": "passed"
});
formatter.before({
  "duration": 382197,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "create new case",
  "description": "",
  "id": "trak-eye-case-creation;create-new-case",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "i am in the create case page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "i click the create case link on the page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "i should fill the form",
  "keyword": "Then "
});
formatter.match({
  "location": "CaseCreation.i_am_in_the_create_case_page()"
});
formatter.result({
  "duration": 4725418395,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreation.i_click_the_create_case_link_on_the_page()"
});
formatter.result({
  "duration": 30379,
  "status": "passed"
});
formatter.match({
  "location": "CaseCreation.i_should_fill_the_form()"
});
formatter.result({
  "duration": 42695,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Business rule create a service1.",
  "description": "",
  "id": "trak-eye-case-creation;business-rule-create-a-service1.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "user creates a service by clicking create service link and fills \"\u003cdescription\u003e\"  \"\u003cservicedate\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "trak-eye-case-creation;business-rule-create-a-service1.;",
  "rows": [
    {
      "cells": [
        "description",
        "servicedate"
      ],
      "line": 37,
      "id": "trak-eye-case-creation;business-rule-create-a-service1.;;1"
    },
    {
      "cells": [
        "desc1",
        "26/05/2017"
      ],
      "line": 38,
      "id": "trak-eye-case-creation;business-rule-create-a-service1.;;2"
    },
    {
      "cells": [
        "desc1",
        "26/05/2017"
      ],
      "line": 39,
      "id": "trak-eye-case-creation;business-rule-create-a-service1.;;3"
    },
    {
      "cells": [
        "desc1",
        "26/05/2017"
      ],
      "line": 40,
      "id": "trak-eye-case-creation;business-rule-create-a-service1.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 468817,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Business rule create a service1.",
  "description": "",
  "id": "trak-eye-case-creation;business-rule-create-a-service1.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user creates a service by clicking create service link and fills \"desc1\"  \"26/05/2017\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "desc1",
      "offset": 66
    },
    {
      "val": "26/05/2017",
      "offset": 75
    }
  ],
  "location": "CaseCreation.user_creates_a_service_by_clicking_create_service_link_and_fills(String,String)"
});
formatter.result({
  "duration": 2030947689,
  "status": "passed"
});
formatter.before({
  "duration": 446649,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Business rule create a service1.",
  "description": "",
  "id": "trak-eye-case-creation;business-rule-create-a-service1.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user creates a service by clicking create service link and fills \"desc1\"  \"26/05/2017\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "desc1",
      "offset": 66
    },
    {
      "val": "26/05/2017",
      "offset": 75
    }
  ],
  "location": "CaseCreation.user_creates_a_service_by_clicking_create_service_link_and_fills(String,String)"
});
formatter.result({
  "duration": 593106415,
  "status": "passed"
});
formatter.before({
  "duration": 472512,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Business rule create a service1.",
  "description": "",
  "id": "trak-eye-case-creation;business-rule-create-a-service1.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user creates a service by clicking create service link and fills \"desc1\"  \"26/05/2017\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "desc1",
      "offset": 66
    },
    {
      "val": "26/05/2017",
      "offset": 75
    }
  ],
  "location": "CaseCreation.user_creates_a_service_by_clicking_create_service_link_and_fills(String,String)"
});
formatter.result({
  "duration": 397247115,
  "status": "passed"
});
});