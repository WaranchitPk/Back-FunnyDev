

const CourseController = {
    find(req,res){
        res.send({
            msg: 'This is Course'
        })
    },
    findById(req,res){
        const {params: {id}} = req;
        res.send({
            msg: id
        })
    }
};

export default CourseController;