<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class FormArbol
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.LabelTitulo = New System.Windows.Forms.Label()
        Me.LabelNombre = New System.Windows.Forms.Label()
        Me.TextBoxNombre = New System.Windows.Forms.TextBox()
        Me.ButtonAñadir = New System.Windows.Forms.Button()
        Me.TreeView1 = New System.Windows.Forms.TreeView()
        Me.ButtonCerrar = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'LabelTitulo
        '
        Me.LabelTitulo.AutoSize = True
        Me.LabelTitulo.Font = New System.Drawing.Font("Microsoft Sans Serif", 40.0!, System.Drawing.FontStyle.Bold)
        Me.LabelTitulo.Location = New System.Drawing.Point(333, 76)
        Me.LabelTitulo.Name = "LabelTitulo"
        Me.LabelTitulo.Size = New System.Drawing.Size(848, 63)
        Me.LabelTitulo.TabIndex = 0
        Me.LabelTitulo.Text = "Formulario del árbol genealógico"
        Me.LabelTitulo.TextAlign = System.Drawing.ContentAlignment.MiddleCenter
        '
        'LabelNombre
        '
        Me.LabelNombre.AutoSize = True
        Me.LabelNombre.Font = New System.Drawing.Font("Microsoft Sans Serif", 14.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.LabelNombre.ForeColor = System.Drawing.Color.Black
        Me.LabelNombre.Location = New System.Drawing.Point(319, 233)
        Me.LabelNombre.Name = "LabelNombre"
        Me.LabelNombre.Size = New System.Drawing.Size(79, 24)
        Me.LabelNombre.TabIndex = 1
        Me.LabelNombre.Text = "Nombre"
        '
        'TextBoxNombre
        '
        Me.TextBoxNombre.Location = New System.Drawing.Point(588, 230)
        Me.TextBoxNombre.Name = "TextBoxNombre"
        Me.TextBoxNombre.Size = New System.Drawing.Size(383, 20)
        Me.TextBoxNombre.TabIndex = 2
        '
        'ButtonAñadir
        '
        Me.ButtonAñadir.BackColor = System.Drawing.Color.IndianRed
        Me.ButtonAñadir.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.ButtonAñadir.ForeColor = System.Drawing.Color.Black
        Me.ButtonAñadir.Location = New System.Drawing.Point(1092, 224)
        Me.ButtonAñadir.Name = "ButtonAñadir"
        Me.ButtonAñadir.Size = New System.Drawing.Size(133, 29)
        Me.ButtonAñadir.TabIndex = 3
        Me.ButtonAñadir.Text = "Añadir"
        Me.ButtonAñadir.UseVisualStyleBackColor = False
        '
        'TreeView1
        '
        Me.TreeView1.Location = New System.Drawing.Point(323, 349)
        Me.TreeView1.Name = "TreeView1"
        Me.TreeView1.Size = New System.Drawing.Size(902, 268)
        Me.TreeView1.TabIndex = 4
        '
        'ButtonCerrar
        '
        Me.ButtonCerrar.Font = New System.Drawing.Font("Microsoft Sans Serif", 15.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.ButtonCerrar.ForeColor = System.Drawing.Color.Black
        Me.ButtonCerrar.Location = New System.Drawing.Point(728, 683)
        Me.ButtonCerrar.Name = "ButtonCerrar"
        Me.ButtonCerrar.Size = New System.Drawing.Size(108, 83)
        Me.ButtonCerrar.TabIndex = 5
        Me.ButtonCerrar.Text = "Cerrar"
        Me.ButtonCerrar.UseVisualStyleBackColor = True
        '
        'FormArbol
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1484, 818)
        Me.Controls.Add(Me.ButtonCerrar)
        Me.Controls.Add(Me.TreeView1)
        Me.Controls.Add(Me.ButtonAñadir)
        Me.Controls.Add(Me.TextBoxNombre)
        Me.Controls.Add(Me.LabelNombre)
        Me.Controls.Add(Me.LabelTitulo)
        Me.ForeColor = System.Drawing.Color.Green
        Me.Name = "FormArbol"
        Me.Text = "FormArbol"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents LabelTitulo As Label
    Friend WithEvents LabelNombre As Label
    Friend WithEvents TextBoxNombre As TextBox
    Friend WithEvents ButtonAñadir As Button
    Friend WithEvents TreeView1 As TreeView
    Friend WithEvents ButtonCerrar As Button
End Class
