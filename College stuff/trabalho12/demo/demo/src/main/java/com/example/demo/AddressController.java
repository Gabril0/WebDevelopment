package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class AddressController {
    private final List<Address> addresses = new ArrayList<>(
            Arrays.asList(
                    new Address("38400-100", "Floriano Peixoto", "Centro", "Uberlandia"),
                    new Address("38400-464", "Avenida Araguari", "Martins", "Uberlandia"),
                    new Address("38400-103", "Avenida Américo Salvador Tangari", "Centro", "Uberlandia")
            )
    );

    @GetMapping("/address")
    public List<Address> getAddresses(){
        return this.addresses;
    }
    @GetMapping("/hello")
    public String HelloWorld(){
        return "Hello World!";
    }

    @GetMapping("/address/{cep}")
    public ResponseEntity<Address> getAddress(@PathVariable String cep){
        for (Address address: addresses){
            if(address.getCep().equals(cep)) {
                return ResponseEntity.ok(address);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/address")
    public void addAddress(@RequestBody Address address){
        this.addresses.add(address);
    }

    @DeleteMapping("/address/{cep}")
    public ResponseEntity<String> deleteAddress(@PathVariable String cep) {
        Address foundAddress = null;
        for (Address address : addresses) {
            if (address.getCep().equals(cep)) {
                foundAddress = address;
                break;
            }
        }

        if (foundAddress != null) {
            addresses.remove(foundAddress);
            return ResponseEntity.ok("Endereco removido");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
