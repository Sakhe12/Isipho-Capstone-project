<template lang="">
    <div class="message">
        <section id="contact" class="container text-center bg-gradient">
            <h2 class="display-2">Contact</h2>
            <form
            action="https://formspree.io/f/mlevoeqb"
            method="post"
            >
                <div class="mb-3 text-center">
                    <label for="exampleInput
                    tName" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter your name" name="fullname" aria-describedby="nameHelp" required>
                  </div>
                  <div class="mb-3 text-center">
                    <label for="exampleInputSurname
                    tName" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="exampleInputSurname1" placeholder="Enter your surname" name="Surname" aria-describedby="surnameHelp" required>
                  </div>
                <div class="mb-3 text-center">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="you@mail.com" name="Email" aria-describedby="emailHelp" required>
                  <div id="emailHelp" class="form-text">This is confidential information </div>
                </div>
                <div class="mb-3 text-center">
                  <label for="exampleInputmessage1" class="form-label">Message</label>
                  <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
                  <input type="text" class="form-control" id="exampleInputmessage1" placeholder="text..." name="message" required>
                  <div id="messagedHelp" class="form-text"></div>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
              </form>

  <footer>
    <p class="text-muted"><i class="bi bi-geo-alt-fill"></i>24 New Rest, Gugulethu,</p>
    <p class="text-muted"><i class="bi bi-phone"></i>083 282 8451</p>
    <p class="text-muted"><i class="bi bi-envelope-fill"></i>sakhemzolisa@gmail.com</p>
    <a href="https://twitter.com/MzolisaSakhe" class="text-dark" target="_blank"> <i class="fa-brands fa-twitter"></i>Twitter</a>
    <a href="https://www.linkedin.com/in/sakhe-mzolisa-507588230/" class="text-dark" target="_blank"><i class="fab fa-linkedin-in"></i>linkedin</a>
    <a href="https://github.com/Sakhe12" class="text-dark" target="_blank"><i class="fa-brands fa-github"></i>Github</a>
  </footer>
  </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .message {
        background-color: #CBE4DE;
        height: 90vh;
    }
</style>