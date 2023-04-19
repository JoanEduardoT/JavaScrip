<?php

//permite realizar la conexion a la bd
class conection{

    public $driver;
    public $host;
    public $user;
    public $password;
    public $database;
    public $conn;

    public function __construct()
    {
        $this->driver = "mysql";
        $this->host = "localhost";
        $this->user = "root";
        $this->password = "";
        $this->database = "login";

        $this->get_conection();
    }

    public function get_conection(){
        $this->conn = new PDO($this->driver.":"."host=" .$this->host. ";"."dbname=".$this->database,$this->user,$this->password);

        if (!$this->conn){
            echo "Error al conectar";
        }
        else {
//"Conexion Establecida";
        }

    }

    public function usuarios(){

        $sql = "CALL usuarios()";
        $statement = $this->conn->prepare($sql);

        if($statement->execute()){

            $result = $statement->fetchAll(PDO::FETCH_ASSOC); 
       
            return $result; }
        }
}
//$obj = new Conection();

?>