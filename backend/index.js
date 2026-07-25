import express from "express";
import cors from "cors";
const app = express();


app.use(cors({
      origin: "*", 
      }));
app.use(express.json());
const router = express.Router();

router.get("/posts",(req,res)=>{
     
      
      res.status(200).json({message:"data received successfully"});
}  );

app.use("/api", router);

app.listen(2000,()=>{
      console.log("server is running on port 2000");
})

