import getContactList from '@salesforce/apex/ContactController.getContactList';
import { LightningElement,wire } from 'lwc';
import {refreshApex} from '@salesforce/apex';

export default class ListOfContacts extends LightningElement {

    @wire(getContactList) myCons;
    handleInsert(){
        console.log("Parent listened");
        refreshApex(this.myCons);


    }
    // error;
    // @wire(getContactList) getContactsWiredMethod({
    //         error,
    //         data
    //     }) {
    //         if (data) {
    //             this.myCons = data; //this.myCons.Name = data; this.error = undefined; 
    //         }
    //         else if(error){ 
    //             this.myCons = undefined; this.error = error; 
    //         } }


    //     handleClick(){

    //         getContactList(){

    //         }
    //     }
}