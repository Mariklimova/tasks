const json = [
  { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
  { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
  { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
  { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
  { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
  { "id": "firebasestorage", "label": "Firebase Storage", "category": "databases", "priority": 2 },
  { "id": "ibmcloudant", "label": "IBM Cloudant", "category": "databases", "priority": 2 },
  { "id": "react", "label": "React", "category": "webTechnologies", "priority": 1 },
  { "id": "angularjs", "label": "ANGULARJS", "category": "webTechnologies", "priority": 1 },
  { "id": "redux", "label": "Redux", "category": "webTechnologies", "priority": 1 },
  { "id": "materialui", "label": "Material UI", "category": "webTechnologies", "priority": 1 },
  { "id": "git", "label": "Git", "category": "otherSkills", "priority": 2 },
  { "id": "adobephotoshop", "label": "Adobe Photoshop", "category": "otherSkills", "priority": 2 },
];


function getAllData() {
  if (!json.length) {
    throw new Error('json is empty')
  }
  return json
}

function getId(id) {
  const filt = json.filter(el => el.id == id);
  if (!filt.length) {
    throw new Error(' this id not found')
  }
  return filt;
}

function updateDatabyTd(id, label, category, priority) {
  const updateDataFilter = json.filter(el => el.id != id)
  updateDataFilter.push({
    id: id,
    label: label,
    category: category,
    priority: priority
  })
  if (!updateDataFilter.id) {
    throw new Error(' this id not found')
  }
  return updateDataFilter;
}

function deleteElementById(id) {
  const deleteElement = json.filter(el => el.id.toLocaleLowerCase() != id.toLocaleLowerCase())
  if (json.length == deleteElement.length) throw new Error('this id not found')
  return deleteElement
}

function createEntryById(label, category, priority) {

  const createEntry = {
    id: label.toLowerCase(),
    label: label,
    category: category,
    priority: priority
  };

  if (json.id == label.toLowerCase()) {
    throw new Error('this id already exists')
  }
  
  json.push(createEntry);
  return json;
}

module.exports = { getAllData, getId, updateDatabyTd, deleteElementById, createEntryById }