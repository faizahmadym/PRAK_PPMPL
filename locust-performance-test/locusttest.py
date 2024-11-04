from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)  # Tunggu antara 1 hingga 5 detik sebelum request

    # Mendapatkan semua minuman
    @task
    def get_minuman(self):
        self.client.get("/minuman")

    # Menambahkan minuman baru
    @task
    def add_minuman(self):
        self.client.post("/minuman", json={"title": "minuman baru", "author": "penemu C", "year": 2020})

    # Mendapatkan minuman berdasarkan ID
    @task
    def get_minuman_by_id(self):
        self.client.get("/minuman/1")

    # Memperbarui minuman berdasarkan ID
    @task
    def update_minumsn(self):
        self.client.put("/minuman/1", json={"title": "minuman diperbarui", "author": "penemu A", "year": 2022})

    # Menghapus minuman berdasarkan ID
    @task
    def delete_minuman(self):
        self.client.delete("/minuman/1")