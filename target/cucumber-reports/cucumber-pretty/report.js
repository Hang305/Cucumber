$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/Login.feature");
formatter.feature({
  "name": "This is test scenario",
  "description": "  I want login into IResource website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify title is displayed correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG01_Title"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The title is displayed correctly \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "title"
      ]
    },
    {
      "cells": [
        "Log In"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify title is displayed correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG01_Title"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The title is displayed correctly \"Log In\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theTitleIsDisplayedCorrectlyTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify description is displayed correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG02_Description"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "The description is displayed correctly \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "description"
      ]
    },
    {
      "cells": [
        "Hello and welcome !"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify description is displayed correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG02_Description"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The description is displayed correctly \"Hello and welcome !\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theDescriptionIsDisplayedCorrectly(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify all fields is blank data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG03_Blank"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enters blank data for the email field",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.step({
  "name": "The error message of email and password fields is displayed correctly with \"\u003cmessage\u003e\" content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "message"
      ]
    },
    {
      "cells": [
        "Required!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify all fields is blank data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG03_Blank"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enters blank data for the email field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEntersBlankDataForTheEmailField()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The error message of email and password fields is displayed correctly with \"Required!\" content",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theErrorMessageOfEmailAndPasswordFieldsIsDisplayedCorrectlyWithContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify email field is NOT already on DB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG04_EMAIL_NOT_ALREADY_ON_DB"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enters the email not already on DB",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.step({
  "name": "The modal alert is displayed correctly with \"\u003cmessage\u003e\" content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "message"
      ]
    },
    {
      "cells": [
        "Email or password is invalid."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify email field is NOT already on DB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG04_EMAIL_NOT_ALREADY_ON_DB"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enters the email not already on DB",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEntersTheEmailNotAlreadyOnDB()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The modal alert is displayed correctly with \"Email or password is invalid.\" content",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theModalAlertIsDisplayedCorrectlyWithContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify password field is NOT already on DB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG05_Password_NotAlreadyOnDB"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enters password field with input data has not already on DB",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.step({
  "name": "The modal alert is displayed correctly with \"\u003cmessage\u003e\" content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "message"
      ]
    },
    {
      "cells": [
        "Email or password is invalid."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify password field is NOT already on DB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG05_Password_NotAlreadyOnDB"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enters password field with input data has not already on DB",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEntersPasswordFieldWithInputDataHasNotAlreadyOnDB()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The modal alert is displayed correctly with \"Email or password is invalid.\" content",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theModalAlertIsDisplayedCorrectlyWithContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Check email field with input data invalid format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG06_Email_InvalidFormat"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enters email field with input data invalid format",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.step({
  "name": "The error message of email field is displayed correctly with \"\u003cmessage\u003e\" content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "message"
      ]
    },
    {
      "cells": [
        "Invalid email format"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check email field with input data invalid format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG06_Email_InvalidFormat"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enters email field with input data invalid format",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEntersEmailFieldWithInputDataInvalidFormat()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The error message of email field is displayed correctly with \"Invalid email format\" content",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theErrorMessageOfEmailFieldIsDisplayedCorrectlyWithContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Check password field with input data invalid length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG07_Password_InvalidLength"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enters password field with input data invalid length",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.step({
  "name": "The error message of password field is displayed correctly with \"\u003cmessage\u003e\" content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "message"
      ]
    },
    {
      "cells": [
        "Minimum 5 characters"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check password field with input data invalid length",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LG07_Password_InvalidLength"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enters password field with input data invalid length",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEntersPasswordFieldWithInputDataInvalidLength()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The error message of password field is displayed correctly with \"Minimum 5 characters\" content",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theErrorMessageOfPasswordFieldIsDisplayedCorrectlyWithContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify on entering data to all fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LG08_Valid_data"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enters the mandatory fields with email and password fields",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iEntersTheMandatoryFieldsWithEmailAndPasswordFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Explore page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theExplorePageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify the default remember is checked",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LG09_Default_Remember"
    }
  ]
});
formatter.step({
  "name": "Open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.LoginSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.invokers.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:135)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeMethod(TestInvoker.java:673)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethod(TestInvoker.java:220)\r\n\tat org.testng.internal.invokers.MethodRunner.runInSequence(MethodRunner.java:50)\r\n\tat org.testng.internal.invokers.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:945)\r\n\tat org.testng.internal.invokers.TestInvoker.invokeTestMethods(TestInvoker.java:193)\r\n\tat org.testng.internal.invokers.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.invokers.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:808)\r\n\tat org.testng.TestRunner.run(TestRunner.java:603)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:429)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:423)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:383)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:326)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:95)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1249)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1092)\r\n\tat org.testng.TestNG.run(TestNG.java:1060)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:193)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:94)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\t... 42 more\r\nCaused by: org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027SUNSHINE\u0027, ip: \u0027192.168.1.135\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, get {url\u003dhttps://iresource.smartdev.vn}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60812/devtoo..., se:cdpVersion: 99.0.4844.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:327)\r\n\tat Pages.LoginPage.\u003cinit\u003e(LoginPage.java:50)\r\n\tat Steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:13)\r\n\t... 48 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The checkbox of remember is checked",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.theCheckboxOfRememberIsChecked()"
});
formatter.result({
  "status": "skipped"
});
});