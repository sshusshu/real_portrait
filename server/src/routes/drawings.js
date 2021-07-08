import { v4 } from 'uuid'
import { readDB, writeDB } from '../dbController.js'

const getDrws = () => readDB('drawings');
const setDrws = data => writeDB('drawings', data);

const drawingsRoute = [
  {
    // GET DRAWINGS
    method: 'get',
    route: '/share',
    handler: (req, res) => {
      const draws = getDrws();
      res.send(draws)
    },
  },
  {
    // GET DRAWING
    method: 'get',
    route: '/share/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const draws = getDrws();
        console.log(params,id)
        // const msg = msgs.find(m => m.id === id)
        // if (!msg) throw Error('not found')
        // res.send(msg)
      } catch (err) {
        res.status(404).send({ error: err })
      }
    },
  },
  {
    // CREATE DRAWINGS
    method: 'post',
    route: '/share',
    handler: ({ body }, res) => {
      const draws = getDrws();
      const newDrw = {
        id: v4(),
        dataUri: body.dataUri,
      }
      draws.unshift(newDrw)
      setDrws(draws)
      res.send(newDrw)
    },
  },
]

export default drawingsRoute
