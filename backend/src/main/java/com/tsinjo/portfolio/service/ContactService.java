package com.tsinjo.portfolio.service;

import com.tsinjo.portfolio.model.Contact;
import com.tsinjo.portfolio.repository.ContactRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    
    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getAllContacts() {
        logger.info("Fetching all contacts");
        return contactRepository.findAll();
    }

    public Contact saveContact(Contact contact) {
        logger.info("Saving contact: {}", contact);
        try {
            Contact savedContact = contactRepository.save(contact);
            logger.info("Contact saved successfully: {}", savedContact);
            return savedContact;
        } catch (Exception e) {
            logger.error("Error saving contact: {}", e.getMessage(), e);
            throw e;
        }
    }

    public Contact getContactById(Long id) {
        return contactRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
    }

    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
} 