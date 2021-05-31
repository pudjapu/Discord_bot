module.exports = function random_group(n_group,name_message){
    let name = name_message.split(",");
    let arr_name = [];
    let i = 0;
    while(name.length > 1){
        i = Math.floor(Math.random() * name.length);
        arr_name.push(name[i]);
        name.splice(i,1);
    }
    arr_name.push(name[0]);
    let group = parseInt(n_group);
    let member = Math.round(arr_name.length/group);
    let answer = '';
    for(i = 0;i < group-1;i++){
        answer = answer+'กลุ่มที่ '+(i+1).toString()+'\n'
        for(let j = 0;j < member;j++){
          answer = answer+'- '+arr_name[0]+'\n'
          arr_name.splice(0,1);
        }
    }
    answer = answer+'กลุ่มที่ '+(group).toString()+'\n'
    for(i = 0;i < arr_name.length;i++){
      answer = answer+'- '+arr_name[i]+'\n'
    }
    return answer;
}