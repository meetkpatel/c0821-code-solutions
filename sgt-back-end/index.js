const pg = require('pg');
var express = require('express');
var app = express();
var jsonExpress = express.json();
app.use(jsonExpress);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/', (req, res, next) => {
  const sql = 'select * from "grades"';
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades/', (req, res, next) => {
  const reqBody = req.body;
  const reqScore = parseInt(reqBody.score);
  if (!reqBody.score || !reqBody.name || !reqBody.course) {
    res.status(400).json({
      error: 'Anyone is missing "name", "course" or "score"'
    });
    return;
  } else if (!Number.isInteger(reqScore) || reqScore <= 0) {
    res.status(400).json({
      error: 'score must be a positive integer'
    });
    return;
  } else if (reqScore > 100) {
    res.status(400).json({
      error: 'score must be between 0 to 100'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name","course", "score")
    values($1,$2,$3) returning *
  `;
  const dbValues = [reqBody.name, reqBody.course, reqScore];
  db.query(sql, dbValues)
    .then(result => {
      const insertedRow = result.rows[0];
      res.status(201).json(insertedRow);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const reqBody = req.body;
  const reqScore = parseInt(reqBody.score);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (!reqBody.score || !reqBody.name || !reqBody.course) {
    res.status(400).json({
      error: 'Anyone is missing "name", "course" or "score"'
    });
    return;
  } else if (!Number.isInteger(reqScore) || reqScore <= 0) {
    res.status(400).json({
      error: 'score must be a positive integer'
    });
    return;
  } else if (reqScore > 100) {
    res.status(400).json({
      error: 'score must be between 0 to 100'
    });
    return;
  }
  const sql = `
    update "grades"
    set    "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *
  `;
  const dbValues = [reqBody.name, reqBody.course, reqScore, gradeId];
  db.query(sql, dbValues)
    .then(result => {
      const updatedRowCount = result.rowCount;
      const updatedRow = result.rows[0];
      if (updatedRowCount === 0) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(updatedRow);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const deleteRowCount = result.rowCount;
      if (deleteRowCount === 0) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
