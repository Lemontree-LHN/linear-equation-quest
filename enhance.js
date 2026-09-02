(function(){
  document.head.insertAdjacentHTML('beforeend','<style>.detail-card{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:14px 0;padding:13px;background:#f7f5ee;border:1px solid #d7d2c5}.detail-card>div{padding:10px;background:#fff;border-left:4px solid #2464a8}.detail-card b{color:#2464a8}.detail-card p{margin:5px 0 0;line-height:1.6;color:#3e4a55}.detail-card .warn{border-left-color:#d7493e;background:#fff0ed}.detail-card .warn b{color:#d7493e}.levels{display:flex;gap:6px;margin:8px 0 12px}.levels button{border:2px solid #17212b;background:#fff;padding:6px 12px;font-weight:800}.levels button.active{background:#f3bd31;box-shadow:2px 2px 0 #17212b}@media(max-width:700px){.detail-card{grid-template-columns:1fr}}</style>');
  const DETAILS={
    equation:['概念：只含一个未知数且未知数次数为1的整式方程。','性质：等式两边同时加、减、乘、除同一个数（除数不为0），等式仍成立。','变化：系数或常数变化会改变解；移项、去括号都要保持等式平衡。','易错：移项必须变号；去括号遇到负号要各项变号。'],
    system:['概念：由两个二元一次方程组成，两个未知数的解要同时满足两式。','性质：代入法或加减法都通过消去一个未知数，把问题化为一元方程。','变化：两条直线的交点就是方程组的解；平行时无解，重合时有无穷多解。','易错：求出一个未知数后必须回代求另一个，并检验两式。'],
    rational:['概念：整数和分数统称有理数，可在数轴上表示。','性质：相反数和为0；绝对值表示到原点的距离。','变化：数轴向右数值增大，向左减小；符号决定方向。','易错：异号相加先比较绝对值；减法要转化为加相反数。'],
    real:['概念：有理数与无理数统称实数；无限不循环小数是无理数。','性质：实数与数轴上的点一一对应，算术平方根非负。','变化：近似小数取位越多越接近真实值，但无理数不能写成有限小数。','易错：9的平方根是±3，√9只有3。'],
    triangle:['概念：三角形由不在同一直线上的三点首尾相接组成。','性质：内角和为180°；任意两边之和大于第三边。','变化：顶点移动会改变边和角，但内角和保持不变。','易错：判断三边能否组成三角形时要检查最小两边之和。'],
    linear:['概念：形如 y=kx+b（k≠0）的函数是一次函数。','性质：k决定增减性和倾斜程度，b是与y轴交点纵坐标。','变化：改变k会改变斜率；改变b会让直线平行上下移动。','易错：读图时先找截距，再判断斜率正负。'],
    quadraticFn:['概念：形如 y=ax²+bx+c（a≠0）的函数图象是抛物线。','性质：对称轴为 x=−b/(2a)，顶点决定最值。','变化：a控制开口方向和宽窄；顶点式可直接读出顶点。','易错：a<0时开口向下，顶点对应最大值。'],
    inverse:['概念：形如 y=k/x（k≠0）的函数是反比例函数。','性质：x与y的乘积恒为k；k>0在一、三象限。','变化：|k|越大，图象离坐标轴越远；x增大时y按反比例变化。','易错：x不能等于0，不能把它当作一次函数。'],
    inequality:['概念：用不等号表示数量大小规律，解集是所有满足条件的值。','性质：两边乘或除以负数时不等号方向改变。','变化：解集在数轴上用空心或实心端点和射线表示。','易错：除以负数忘记变号是最常见错误。'],
    parallel:['概念：同一平面内不相交的两条直线互相平行。','性质：平行线的同位角相等、内错角相等、同旁内角互补。','变化：截线角度改变会影响平行判定；平行时对应角保持关系。','易错：判定与性质方向不要混用。'],
    pythagoras:['概念：直角三角形两直角边平方和等于斜边平方。','性质：a²+b²=c²；逆定理可判断一个三角形是否为直角三角形。','变化：直角边变化时斜边由平方和决定。','易错：c必须是最长边，不能把任意一边当斜边。'],
    similarity:['概念：形状相同、大小可不同的图形叫相似图形。','性质：对应角相等、对应边成比例；面积比等于相似比平方。','变化：相似比改变时长度按比例变化，面积按平方变化。','易错：周长比等于相似比，不是相似比平方。'],
    circle:['概念：平面内到定点距离等于定长的点组成圆。','性质：切线垂直于过切点半径；同弧所对圆周角相等。','变化：圆心角增大，所对弧长和扇形面积增大。','易错：弧长公式中的圆心角要用度数，半径单位要统一。'],
    probability:['概念：必然事件概率为1，不可能事件概率为0，随机事件在两者之间。','性质：等可能结果下，概率=有利结果数÷全部结果数。','变化：试验次数增加时频率通常更稳定，但单次结果会波动。','易错：分母是全部等可能结果，不能只数有利结果。']
  };
  const HARD={equation:['3(x−2)+5=2x+12，x=?','13','先去括号，再合并同类项。','3x−6+5=2x+12，所以x=13。'],system:['2x+y=11，x−y=1，求x','4','两式相加消去y。','3x=12，所以x=4，y=3。'],rational:['(−3)²−5×(−2)=?','19','先算乘方和乘法，再做减法。','9+10=19。'],triangle:['等腰三角形顶角40°，每个底角？','70','两个底角相等，内角和为180°。','(180−40)÷2=70°。'],linear:['一次函数y=2x−3，当x=5时y=?','7','把x=5代入。','y=2×5−3=7。'],quadraticFn:['y=(x−3)²−2的顶点？','3,-2','顶点式直接读(h,k)。','顶点为(3,−2)。'],inequality:['−3x+5≤14，解集？','x≥-3','除以负数时不等号变向。','−3x≤9，所以x≥−3。'],similarity:['相似比2:3，面积比？','4:9','面积比是相似比的平方。','2²:3²=4:9。']};
  let difficulty='basic';
  function decorate(){
    const lesson=document.querySelector('.lesson'), panel=document.querySelector('.work section.panel');
    if(!lesson||!panel||lesson.dataset.enhanced)return;
    const detail=DETAILS[type]||[(I[type]||['本专题的基本概念'])[0],(I[type]||['','核心性质与公式'])[1],`改变相关参数时，${(I[type]||['',''])[0]}中的数量关系会随之变化。`,(I[type]||['','', '请结合例题检查'])[2]];
    if(detail){lesson.insertAdjacentHTML('afterbegin',`<div class="detail-card"><div><b>概念</b><p>${detail[0].replace(/^概念：/,'')}</p></div><div><b>性质 / 公式</b><p>${detail[1].replace(/^性质：/,'')}</p></div><div><b>变化规律</b><p>${detail[2].replace(/^变化：/,'')}</p></div><div class="warn"><b>易错点</b><p>${detail[3].replace(/^易错：/,'')}</p></div></div>`)}
    const h=panel.querySelector('h2');h.insertAdjacentHTML('afterend','<div class="levels" aria-label="练习难度"><button data-diff="basic" class="active">基础</button><button data-diff="medium">提高</button><button data-diff="challenge">挑战</button></div>');
    panel.querySelectorAll('[data-diff]').forEach(btn=>btn.onclick=()=>{difficulty=btn.dataset.diff;panel.querySelectorAll('[data-diff]').forEach(x=>x.classList.toggle('active',x===btn));newQ();if(difficulty==='challenge'&&HARD[type]){const h=HARD[type];Q={q:h[0],a:h[1],h:h[2],e:h[3]};question.textContent=Q.q;answer.value='';feedback.className='feedback';feedback.textContent='挑战题：先写出关键步骤，再输入最终答案。'}});
    lesson.dataset.enhanced='1';
  }
  new MutationObserver(decorate).observe(document.getElementById('work'),{childList:true,subtree:true});decorate();
})();
