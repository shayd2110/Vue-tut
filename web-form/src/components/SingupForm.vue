<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />

    <label>Password</label>
    <input type="password" required v-model="password" />
    <span v-if="passwordError" class="err">{{ passwordError }}</span>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" id="terms" v-model="terms" />
      <label for="terms">I agree to the terms and conditions</label>
    </div>

    <div class="submit">
      <button type="submit">Create an Account</button>
    </div>

    <!-- <div>
      <input type="checkbox" value="shay" v-model="names" />
      <label for="names">Shay</label>
    </div>
    <div>
      <input type="checkbox" value="inbar" v-model="names" />
      <label for="names">Inbar</label>
    </div>
    <div>
      <input type="checkbox" value="netta" v-model="names" />
      <label for="names">Netta</label>
    </div> -->
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms agreed: {{ terms ? "Yes" : "No" }}</p>
  <!-- <p>Selected Names: {{ names.join(", ").toUpperCase() }}</p> -->
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "developer", // Default role
      terms: false, // Default terms agreement
      // names: [], // Array to hold selected names
      tempSkill: "", // Temporary skill input
      skills: [], // Array to hold skills
      passwordError: "", // Placeholder for password validation error
    };
  },
  methods: {
    addSkill(e) {
      console.log(e);
      if (e.key === "," && this.tempSkill.trim() !== "") {
        const skill = this.tempSkill.replace(/,/g, "").trim();
        if (!this.skills.includes(skill)) {
          this.skills.push(skill);
        }
        this.tempSkill = ""; // Clear the input after adding
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => item !== skill);
    },
    handleSubmit() {
      //validate password
      this.passwordError = this.password.length > 5 ? "" : "Password must be at least 6 characters long";
      if (!this.passwordError) {
        // If no error, proceed with form submission logic
        console.log("Form submitted with:", {
          email: this.email,
          password: this.password,
          role: this.role,
          terms: this.terms,
          skills: this.skills,
        });
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.err {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
