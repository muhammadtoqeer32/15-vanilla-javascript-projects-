#include<iostream>
using namespace std;

class A
{
public:
A(int a) { 
cout << "A's constructor called" <<a <<endl; 
}
~A() {
 cout << "A's Destructor is  called" << endl;
  }
};

class B
{
public:
B(int n) { 
cout << "B's constructor called" <<n<< endl; 
}
~B() {
 cout << "B's Destructor is  called" << endl;
  }
};

class C: public B, public A // Note the order
{
public:
C(int a,int n,int x):B(a),A(n) { 
cout << "C's constructor called" <<x<< endl;
 }
~C() {
 cout << "C's Destructor is  called" << endl;
  }
};

int main()
{
	C c(1,2,3);
	return 0;
}

