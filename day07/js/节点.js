/*
    节点 常用节点有5种
    1. 1）文档节点:
    - document.nodeType:9 节点属性
    - document.nodeValue:null属性值
    - document.nodeName："#document"属性名
    2. 2）属性节点：
    - nodeType:2
    - nodeName:属性名
    - nodeValue:属性值



    3. 3）标签: 用到
    - nodeType:1;  类型 可能要用它写判断 判断节点是不是标签
    - nodeName:大写的标签名
    - nodeVaule:null

    4. 4)文本节点
    换行也属于文本节点
    - nodeType:3
    - nodeName:"#text"
    - nodeValue:"文本内容"

    5. 5）注释节点：
    - nodeType:8
    - nodeName:"#text"
    - nodeValue:"文本内容"

    */
   a.getAttribueNode("href").nodeType;
   a.getAttribueNode("href").nodeName;//"href"
   a.getAttribueNode("href").nodeValue;//"http://www.baidu.com"

    a.nodeType;//1
    a.nodeName;//"A"
    a.nodeValue;//null
