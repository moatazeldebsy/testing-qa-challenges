<template>
  <form @submit.prevent="handleSubmit" class="consultation-form">
    <div class="form-group">
      <label for="fullName">Full Name <span class="required">*</span></label>
      <input 
        type="text" 
        id="fullName" 
        v-model="form.fullName" 
        required 
        placeholder="John Doe"
        class="form-input"
      >
    </div>

    <div class="form-group">
      <label for="email">Email Address <span class="required">*</span></label>
      <input 
        type="email" 
        id="email" 
        v-model="form.email" 
        required 
        placeholder="john@company.com"
        class="form-input"
      >
    </div>

    <div class="form-group">
      <label for="company">Company Name</label>
      <input 
        type="text" 
        id="company" 
        v-model="form.company" 
        placeholder="Your Company Ltd."
        class="form-input"
      >
    </div>

    <div class="form-group">
      <label for="package">Consultation Package <span class="required">*</span></label>
      <select 
        id="package" 
        v-model="form.package" 
        required
        class="form-select"
      >
        <option value="">Select a package</option>
        <option value="starter">Starter Package ($2,500/month)</option>
        <option value="professional">Professional Package ($5,000/month)</option>
        <option value="enterprise">Enterprise Package (Custom)</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">Tell us about your testing challenges</label>
      <textarea 
        id="message" 
        v-model="form.message" 
        rows="4" 
        placeholder="Describe your current testing challenges and goals..."
        class="form-textarea"
      ></textarea>
    </div>

    <div class="form-group">
      <button type="submit" class="submit-button">
        Schedule Your Consultation
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  fullName: '',
  email: '',
  company: '',
  package: '',
  message: ''
})

const handleSubmit = async () => {
  console.log('Form submitted:', form.value)
  form.value = {
    fullName: '',
    email: '',
    company: '',
    package: '',
    message: ''
  }
}
</script>

<style scoped>
.consultation-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.required {
  color: #e11d48;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 3px rgba(var(--vp-c-brand), 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.875rem 1.5rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background: var(--vp-c-brand-dark);
}

@media (max-width: 767px) {
  .consultation-form {
    padding: 1.5rem;
  }
  
  .submit-button {
    padding: 0.75rem 1rem;
  }
}
</style>