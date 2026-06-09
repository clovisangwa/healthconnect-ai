-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'patient',
  avatar VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patients table
CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE NOT NULL,
  age INT,
  gender VARCHAR(50),
  medical_history TEXT,
  allergies TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Doctors table
CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE NOT NULL,
  specialty VARCHAR(255) NOT NULL,
  years_of_experience INT,
  license VARCHAR(255),
  verified BOOLEAN DEFAULT FALSE,
  rating DECIMAL(3,1) DEFAULT 0,
  languages TEXT,
  consultation_fee DECIMAL(10,2),
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Appointments table
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  patient_id INT NOT NULL,
  doctor_id INT NOT NULL,
  scheduled_at TIMESTAMP NOT NULL,
  duration INT DEFAULT 30,
  status VARCHAR(50) DEFAULT 'scheduled',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

-- Chat messages table
CREATE TABLE chat_messages (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  content TEXT NOT NULL,
  role VARCHAR(50) NOT NULL,
  severity VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Articles table
CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(255) NOT NULL,
  author VARCHAR(255),
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_appointments_patient ON appointments(patient_id);
CREATE INDEX idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX idx_chat_messages_user ON chat_messages(user_id);
