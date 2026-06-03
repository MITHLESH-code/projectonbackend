const asyncHandler=(requestHandler)=>{
    (req,resp,next)=>{
       Promise.resolve(requestHandler(req,resp,next)).
       catch((error)=>next(error));
    }
}

export default asyncHandler