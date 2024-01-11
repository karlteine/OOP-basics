class Student {
    #name;
    #id;
    #status;
  
    constructor(name, id) {
      this.#name = name;
      this.#id = id;
      this.#status = "Active";
    }
  
    getId() {
      return this.#id;
    }
  
    setName(name) {
      this.#name = name;
    }
  
    getName() {
      return this.#name;
    }
  
    setStatus(status) {
      const validStatuses = ["Active", "Expelled", "Finished", "Inactive"];
      if (validStatuses.includes(status)) {
        this.#status = status;
      }
    }
  
    getStatus() {
      return this.#status;
    }
  }
  
  const student1 = new Student("John", 1);
  
  console.log("ID:", student1.getId());
  console.log("Name:", student1.getName());
  console.log("Status:", student1.getStatus());
  
  student1.setName("Jane");
  student1.setStatus("Finished");
  
  console.log("Name:", student1.getName());
  console.log("Status:", student1.getStatus());
  