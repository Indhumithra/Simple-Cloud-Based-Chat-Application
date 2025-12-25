const firebaseConfig = {
  apiKey: "AIzaSyCfkNXHvKbpjO9vFoRLyD9liTY7x6fdp0Y",
    authDomain: "cloud-chat-application-73622.firebaseapp.com",
  projectId: "cloud-chat-application-73622",
};
// Firebase CDN
import("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js").then(({ initializeApp }) => {
  import("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js").then(({ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }) => {
    import("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js").then(({ getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot }) => {

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);

      window.register = () => {
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then(() => alert("Registered successfully ✔️"))
          .catch(err => alert(err.message));
      };

      window.login = () => {
        signInWithEmailAndPassword(auth, email.value, password.value)
          .then(() => {
            document.querySelector(".auth").classList.add("hidden");
            document.querySelector(".chat").classList.remove("hidden");
            loadMessages();
          })
          .catch(err => alert(err.message));
      };

      window.logout = () => {
        signOut(auth).then(() => location.reload());
      };

      window.sendMessage = async () => {
        if (!messageInput.value) return;
        await addDoc(collection(db, "messages"), {
          text: messageInput.value,
          user: auth.currentUser.email,
          createdAt: serverTimestamp()
        });
        messageInput.value = "";
      };

      function loadMessages() {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        onSnapshot(q, snapshot => {
          messages.innerHTML = "";
          snapshot.forEach(doc => {
            const div = document.createElement("div");
            div.className = "message";
            div.textContent = `${doc.data().user}: ${doc.data().text}`;
            messages.appendChild(div);
          });
        });
      }

    });
  });
});
