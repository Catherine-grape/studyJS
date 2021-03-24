ary=[1,2,3,4]// __proto__==>array类 也是一个普通的对象==>prototype==>array的prototype __proto__==》Function类的原型
//__proto__==>基类的prototype
//Object类 基类 也是一个普通的对象==>prototype==>基类的prototype==》__proto__==>Function类的原型

//函数（类）是谁的实例？Function（类）的实例。Function是所有函数的类
//Function类 prototype==>Function类的原型==》__proto__==》基类的prototype
//Funciton的prototype和__proto__ 指向的都是Function类的原型
//所有的函数（类）都有一个prototype的属性
//所有的默认的prototype上都有一个constructor属性 指向构造函数本身
//所有的对象都有一个__proto__的属性 指向所属类的原型（prototype）所有的函数也同时是一个普通对象
//所有的函数都是Function类的一个实例