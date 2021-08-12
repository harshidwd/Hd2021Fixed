public with sharing class ContactController {
    @AuraEnabled(cacheable=true) //for @wire cacheable =true required for continous streaming
    public static List<Contact>  getContactList(){
        return [Select FirstName,LastName,Email,Title from Contact];
    }
}
