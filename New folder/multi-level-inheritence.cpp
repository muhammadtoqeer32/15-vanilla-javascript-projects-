#include<iostream>
using namespace std;
class A{
	protected:
		int a;
	public:
	void set_A(int a){
		this->a=a;
	}	
	void display(){
		cout<<"A::a  "<<a<<endl;
	}
};
class B:virtual public A{
protected:
	int b;
	public:
void set_A(int b)
{
	this->b=b;
}	
void out(){
	cout<<"B::b  "<<b<<endl;
}
		
};
class C:virtual public A{
	protected:
	int c;
	public:
void set_C(int c)
{
	this->c=c;
}	
void show(){
	cout<<"C::c  "<<c<<endl;
}
};
class D:public B,public C{
	
};

int main(){
	D c;
	c.set_C(12344321);
	c.show();
}
