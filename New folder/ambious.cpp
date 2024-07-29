#include<iostream >
using namespace std;
class Base1{
	public:
	void greet(){
		cout<<"Hello,How are you and I am doing well!"<<endl;
	}
};
class Base2{
	public:
	void greet(){
		cout<<"This is working to do anything "<<endl;
	}
};
class Derived:public Base1,public Base2{
	public:
		void greet(){
		Base2::greet();	
		Base1::greet();
		}
		
	
};

int main(){
	Derived d1;
	d1.greet();
}
