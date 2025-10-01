package com.tsinjo.portfolio.controller;

import com.tsinjo.portfolio.model.Contact;
import com.tsinjo.portfolio.service.ContactService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000") // Add your frontend URL here
public class ContactController {
    
    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);
    
    @Autowired
    private ContactService contactService;

    @GetMapping
    public ResponseEntity<?> getAllContacts() {
        logger.info("Fetching all contacts");
        try {
            return ResponseEntity.ok(contactService.getAllContacts());
        } catch (Exception e) {
            logger.error("Error fetching contacts: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping
    public ResponseEntity<Contact> createContact(@Valid @RequestBody Contact contact) {
        logger.info("Received contact request: {}", contact);
        try {
            Contact savedContact = contactService.saveContact(contact);
            logger.info("Successfully saved contact: {}", savedContact);
            return ResponseEntity.ok(savedContact);
        } catch (Exception e) {
            logger.error("Error saving contact: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
        Contact contact = contactService.getContactById(id);
        return ResponseEntity.ok(contact);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
        return ResponseEntity.ok().build();
    }
} 