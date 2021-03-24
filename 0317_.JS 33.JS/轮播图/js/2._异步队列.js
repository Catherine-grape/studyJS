// js是单线程的，一次只能执行一个任务（或者说代码只能一行一行执行）；
// 当代码执行的时候浏览器会分配一个执行栈提供代码执行的环境，还会分配一个主线程来执行代码，还会创建一个异步任务队列。代码从上往下一行一行执行，当遇到异步任务的时候会把这个任务存放到异步任务队列中（由浏览器新分配的线程来执行），主线程再继续往下走，当把所有的同步代码（任务）执行完成之后就空闲了，他就会去异步任务列中查看是否有符合输出条件的任务，如果有就拿到执行栈中进行输出

// 如果同步代码没有执行完，异步任务是不能输出的，也就是说所有的异步任务输出，都是在同步代码之后的


// 定时器 ajax 事件 promise async await


// 异步任务队列也叫：等待任务队列