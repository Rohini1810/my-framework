const router = Router()
router.get("/", (req, res) => {
    CompanyModel.search(req.query, res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                    
                }
            }
        }
    }),
    (req, res) => {
        CompanyModel.getOne(req.params, res.callback)
    }
    
)
router.post("/", (req, res) => {
    CompanyModel.saveData(req.body, res.callback)
    console.log("Hello");
})
router.put("/:id", (req, res) => {
    res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    res.send(`Delete For Id ${req.params.id}`)
})
export default router
