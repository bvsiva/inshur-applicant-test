/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; 

Given("the user visits Inshur Test Website", function(){ 
    cy.visit("http://localhost:3000").contains("Cypress Test");
})

When("they click on user {string}",(userNo)=>{
    cy.get(`[data-test='${userNo}']`).click();
})

Then("assert name should be {string}",(Name)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(1)').contains(Name);
})

Then("assert emailid should be {string}",(email)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(2)').contains(email);
})
Then("assert phone should be {string}",(phoneNo)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(3)').contains(phoneNo);
})
Then("assert city should be {string}",(city)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(4)').contains(city);
})
Then("assert State should be {string}",(state)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(5)').contains(state);
})
Then("assert Country should be {string}",(country)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(6)').contains(country);
})
Then("assert Organization should be {string}",(Organization)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(7)').contains(Organization);
})
Then("assert Job profile should be {string}",(jobProfile)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(8)').contains(jobProfile);
})
Then("assert Additional info should be {string}",(additionalInfo)=>{
    cy.get('.customerdetails > .centeralign > .panel-body > :nth-child(9)').contains(additionalInfo);
})
