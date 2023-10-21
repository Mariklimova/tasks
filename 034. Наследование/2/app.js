// 2. Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer


class Person {
    name;
    adress;
    phoneNum;
    setName(name){
        this.name = name;
    }
    setAdress(adress){
        this.adress = adress;
    }
    setPhoneNum(phoneNum){
        this.phoneNum = phoneNum;
    }
    getName(){
       return this.name
    }
    getAdress(){
        return this.adress
    }
   getPhoneNum(){
        return this.phoneNum
    }

}
class Customer extends Person {
    clientPhone;
    isValid;
    setclientPhone(clientPhone){
        this.clientPhone = clientPhone;
    }
    setisValid(isValid){
        this.isValid = isValid;
    }
    getclientPhone(){
       return this.clientPhone;
    }
    getisValid(){
        return this.isValid;
    }
}
const customer = new Customer();
customer.setName('Artem');
customer.setAdress('waw');
customer.setPhoneNum('45356666');
customer.setclientPhone('111111111');
customer.setisValid(true);


console.log(customer.getName());
console.log(customer.getAdress());
console.log(customer.getPhoneNum());
console.log(customer.getclientPhone());
console.log(customer.getisValid());
