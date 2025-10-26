var URL = Java.type("java.net.URL");
var HttpURLConnection = Java.type("java.net.HttpURLConnection");
var BufferedReader = Java.type("java.io.BufferedReader");
var DataOutputStream = Java.type("java.io.DataOutputStream");
var InputStreamReader = Java.type("java.io.InputStreamReader");
var OutputStreamWriter = Java.type("java.io.OutputStreamWriter");
var String = Java.type("java.lang.String");

// Token for bearer
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZGM2YmM1OC1hMjhkLTQ2YjMtYWY1MS02NGU1YTVjNDU5MGEiLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE3NDgzNTI5NjksImV4cCI6NDkwNDExMjk2OX0.pokr5aCEDUxiMNmaraG0HB4Ux8HTlCWns4BtNAvZ-7Y'
 
var HTTPTORBackEnd = {
    post: function(url, data) {
        var obj = new URL(url);
        var con = obj.openConnection();
        con.setDoInput(true);
        con.setDoOutput(true);
        con.setInstanceFollowRedirects( false );
        con.setRequestMethod( "POST" );
        con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");  
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        con.setRequestProperty("Authorization", "Bearer " + token);
 
        var os;
        try {
            os = con.getOutputStream();
            //var writer = new DataOutputStream(os);
            //writer.writeBytes(new String(JSON.stringify(data)));
            var writer = new OutputStreamWriter(os, "UTF-8");
            writer.write(JSON.stringify(data));
            writer.flush();
            writer.close();       
            os.close();
        } catch(exc) {
            print("Erreur d'envoi: " + exc);
        }
        var br;
        var res = null;
        try {
            br = new BufferedReader(
                new InputStreamReader(con.getInputStream(), "UTF-8")
            ); 
            var response = '';
            var responseLine = null;
            while ((responseLine = br.readLine()) != null) {
                response += responseLine.trim();
            }
            res = JSON.parse(response.toString());
        } catch(exc) {
            print("Erreur d'envoi: " + exc);
        }
        con.disconnect();
 
        return res;
    },
    // GET FUNCTION
    get: function(url) {
        var obj = new URL(url);
        var con = obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", "Mozilla/5.0");
        con.setRequestProperty("Accept", "application/json");
        con.setRequestProperty("Authorization", "Bearer " + token);

        var res = null;
        try {
            var br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
            var response = "";
            var line;
            while ((line = br.readLine()) != null) {
                response += line;
            }
            res = JSON.parse(response);
        } catch (exc) {
            print("Erreur GET: " + exc);
        }

        con.disconnect();
        return res;
    }
} 