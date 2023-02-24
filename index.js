fetch("https://potatoesskill.com/api/ryuukapatreons").then(res => {
                return res.text();
            }).then(data => {
                document = data
                console.log(data)
})
