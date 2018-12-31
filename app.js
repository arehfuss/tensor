
const values = [];
for (let i = 0; i < 30; i++){
  values[i] = Math.random(0,100);
}
const shape = [2,3,5];
const data = tf.tensor3d(values, shape);
data.print();
tf.tensor([1, 2, 3, 4, 5,6,6,7,5,5],[2,5]).print();
let i = tf.tensor([1, 2, 3, 4, 5,6,6,7,5,5,6,6,7,5,5],[3,5]);
console.log(i);

document.getElementById('tensor').innerHTML = `${data}`;
// hhh;s