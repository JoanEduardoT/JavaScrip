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

    public function citashoy(){

        $sql = "CALL ListarCitas()";
        $statement = $this->conn->prepare($sql);

        if($statement->execute()){

            $result = $statement->fetchAll(PDO::FETCH_ASSOC); 
       
            return $result; }
        }

        public function Reporte0(){

            $sql = "CALL Reportes0()";
            $statement = $this->conn->prepare($sql);
    
            if($statement->execute()){
    
                $result = $statement->fetchAll(PDO::FETCH_ASSOC); 
           
                return $result; }
            }

        function reporte1($enfermedad){

            $sql = "CALL Reportes1(?)";
            $statement =$this->conn->prepare($sql);
            $statement->bindParam(1,$enfermedad);
    
        }

        Public function reporte2($sexo,$nombre){
        
            $sql = "CALL Reportes2(?,?)";
            $statement = $this->conn->prepare($sql);
    
            $statement->bindParam(1,$sexo);
            $statement->bindParam(2,$nombre);
        }

        public function Reporte3(){

            $sql = "CALL Reportes3()";
            $statement = $this->conn->prepare($sql);
    
            if($statement->execute()){
    
                $result = $statement->fetchAll(PDO::FETCH_ASSOC); 
           
                return $result; }
            }
}
//$obj = new Conection();

?>