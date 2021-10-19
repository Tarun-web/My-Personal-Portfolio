<?php
class Database{
    public $con;
    public function __construct(){
        $this->con = mysqli_connect('localhost', 'root', '', 'postfolio');
        if(!$this->con){
            echo 'Connection Error'.mysqli_connect_error($this->con);
        } 
    }
    // INSERT
    public function insert($table_name, $data){
        $insert_query = "insert into ".$table_name."( ";
        $insert_query .= implode(",", array_keys($data)).") values(";
        $insert_query .= "'".implode("', '". array_values($data)). "')";
        $res = mysqli_query($this->con, $insert_query);
        if($res){
            return true;
        }else{
            echo mysqli_error($this->con);
        }
    }
    //SELECT
    public function select($table_name){
        $select_query = "select * from ".$table_name;
        $res_select = mysqli_query($this->con, $select_query);
        if($res_select){
            while($row = mysqli_fetch_assoc($result)){
                $array[] = $row;
            }
            return $array;
        }else{
            echo mysqli_error($this->con);
        }
    }

}

?>